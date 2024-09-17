<?php

class GetImages{

    public function __construct(private string $directory, private array $extensions){
    }

    public function getImages(): array {
        $images = [];

        foreach($this->extensions as $extension){

            $path = $this->directory . '*.' . $extension;

            foreach(glob($path) as $image){
                $images[] = $image;
            }
        }

        return $images;
    }
}