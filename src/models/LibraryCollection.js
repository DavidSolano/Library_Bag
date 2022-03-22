import {LibraryItem} from "@/models/LibraryItems";
//import {LibraryItem} from "./LibraryItems";

export default function LibraryCollection(){
    // inherit array functionality (ES6+)
    this.__proto__ = [];

    this.push(1);
    this.splice(0,1);

    this.addItem = function(item){
        // option 1
        //this.push(new LibraryItem(item, item => this.removeItem(item)));
        // option 2
        //this.push(new LibraryItem(item, () => console.log(this))); // collection
        //this.push(new LibraryItem(item, function() {console.log(this)})); // item
        this.push(new LibraryItem(item, (collection =>
                    function(){
                        collection.removeItem(this); // this === item
                    }
            )(this) // this === collection
        ));
        // option 2.1
        // this.push(new LibraryItem(item, () => {
        //         let collection = this; // this === collection
        //         return function(){
        //             collection.removeItem(this); // this === item
        //         }
        //     }
        // ));
        // option 2.2
        // this.push(new LibraryItem(item, (function(collection){
        //         return function(){
        //             collection.removeItem(this); // this === item
        //         }
        //     })(this) // this === collection
        // ));


        // return "this" to utilize chaining
        return this;
    }

    this.removeItem = function(item){
        this.splice(this.indexOf(item), 1);

        return this;
    }
}
// standard way pre-ES6
// LibraryCollection.prototype = [];
// LibraryCollection.prototype.constructor = LibraryCollection;
