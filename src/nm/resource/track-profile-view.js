.nm-track-profile-view
{
    // @cover-height: @nm-app-track-profile-height * 0.8;
    // display: flex;
    height: @nm-app-track-profile-height;

    > p
    {
        display: block;
    }

    > .name
    {
        font-size:@font-size-base;
    }

    > .artist
    {
        font-size:@font-size-small;
        color: @nm-separate-color;
    }

    > img.cover
    {
        float: left;
        margin: 10px;
        // margin-left: -80px;
        width: @nm-app-track-profile-height;
        height: @nm-app-track-profile-height;
    }
}
