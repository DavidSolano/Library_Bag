import {LibraryItem} from "@/models/LibraryItems";

export default function BagCollection(){
    this.__proto__ = [];

    this.addItem = function (item){
        this.push(new LibraryItem(item, (collection =>
                    function(){
                        collection.removeItem(this);
                    }
            )(this)
        ));
    }

    this.removeItem = function (item){
        this.splice(this.indexOf(item), 1);

        return this;
    }


}