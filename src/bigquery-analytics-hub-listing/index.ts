// https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigqueryAnalyticsHubListingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Categories of the listing. Up to two categories are allowed.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#categories BigqueryAnalyticsHubListing#categories}
  */
  readonly categories?: string[];
  /**
  * The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#data_exchange_id BigqueryAnalyticsHubListing#data_exchange_id}
  */
  readonly dataExchangeId: string;
  /**
  * Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#description BigqueryAnalyticsHubListing#description}
  */
  readonly description?: string;
  /**
  * Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#display_name BigqueryAnalyticsHubListing#display_name}
  */
  readonly displayName: string;
  /**
  * Documentation describing the listing.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#documentation BigqueryAnalyticsHubListing#documentation}
  */
  readonly documentation?: string;
  /**
  * Base64 encoded image representing the listing.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#icon BigqueryAnalyticsHubListing#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#id BigqueryAnalyticsHubListing#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the listing. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#listing_id BigqueryAnalyticsHubListing#listing_id}
  */
  readonly listingId: string;
  /**
  * The name of the location this data exchange listing.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#location BigqueryAnalyticsHubListing#location}
  */
  readonly location: string;
  /**
  * Email or URL of the primary point of contact of the listing.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#primary_contact BigqueryAnalyticsHubListing#primary_contact}
  */
  readonly primaryContact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#project BigqueryAnalyticsHubListing#project}
  */
  readonly project?: string;
  /**
  * Email or URL of the request access of the listing. Subscribers can use this reference to request access.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#request_access BigqueryAnalyticsHubListing#request_access}
  */
  readonly requestAccess?: string;
  /**
  * bigquery_dataset block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#bigquery_dataset BigqueryAnalyticsHubListing#bigquery_dataset}
  */
  readonly bigqueryDataset: BigqueryAnalyticsHubListingBigqueryDataset;
  /**
  * data_provider block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#data_provider BigqueryAnalyticsHubListing#data_provider}
  */
  readonly dataProvider?: BigqueryAnalyticsHubListingDataProvider;
  /**
  * publisher block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#publisher BigqueryAnalyticsHubListing#publisher}
  */
  readonly publisher?: BigqueryAnalyticsHubListingPublisher;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#timeouts BigqueryAnalyticsHubListing#timeouts}
  */
  readonly timeouts?: BigqueryAnalyticsHubListingTimeouts;
}
export interface BigqueryAnalyticsHubListingBigqueryDataset {
  /**
  * Resource name of the dataset source for this listing. e.g. projects/myproject/datasets/123
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#dataset BigqueryAnalyticsHubListing#dataset}
  */
  readonly dataset: string;
}

export function bigqueryAnalyticsHubListingBigqueryDatasetToTerraform(struct?: BigqueryAnalyticsHubListingBigqueryDatasetOutputReference | BigqueryAnalyticsHubListingBigqueryDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset: cdktf.stringToTerraform(struct!.dataset),
  }
}

export class BigqueryAnalyticsHubListingBigqueryDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingBigqueryDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingBigqueryDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataset = value.dataset;
    }
  }

  // dataset - computed: false, optional: false, required: true
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }
}
export interface BigqueryAnalyticsHubListingDataProvider {
  /**
  * Name of the data provider.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#name BigqueryAnalyticsHubListing#name}
  */
  readonly name: string;
  /**
  * Email or URL of the data provider.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#primary_contact BigqueryAnalyticsHubListing#primary_contact}
  */
  readonly primaryContact?: string;
}

export function bigqueryAnalyticsHubListingDataProviderToTerraform(struct?: BigqueryAnalyticsHubListingDataProviderOutputReference | BigqueryAnalyticsHubListingDataProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    primary_contact: cdktf.stringToTerraform(struct!.primaryContact),
  }
}

export class BigqueryAnalyticsHubListingDataProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingDataProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primaryContact !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryContact = this._primaryContact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingDataProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._primaryContact = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._primaryContact = value.primaryContact;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // primary_contact - computed: false, optional: true, required: false
  private _primaryContact?: string; 
  public get primaryContact() {
    return this.getStringAttribute('primary_contact');
  }
  public set primaryContact(value: string) {
    this._primaryContact = value;
  }
  public resetPrimaryContact() {
    this._primaryContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryContactInput() {
    return this._primaryContact;
  }
}
export interface BigqueryAnalyticsHubListingPublisher {
  /**
  * Name of the listing publisher.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#name BigqueryAnalyticsHubListing#name}
  */
  readonly name: string;
  /**
  * Email or URL of the listing publisher.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#primary_contact BigqueryAnalyticsHubListing#primary_contact}
  */
  readonly primaryContact?: string;
}

export function bigqueryAnalyticsHubListingPublisherToTerraform(struct?: BigqueryAnalyticsHubListingPublisherOutputReference | BigqueryAnalyticsHubListingPublisher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    primary_contact: cdktf.stringToTerraform(struct!.primaryContact),
  }
}

export class BigqueryAnalyticsHubListingPublisherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingPublisher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primaryContact !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryContact = this._primaryContact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingPublisher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._primaryContact = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._primaryContact = value.primaryContact;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // primary_contact - computed: false, optional: true, required: false
  private _primaryContact?: string; 
  public get primaryContact() {
    return this.getStringAttribute('primary_contact');
  }
  public set primaryContact(value: string) {
    this._primaryContact = value;
  }
  public resetPrimaryContact() {
    this._primaryContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryContactInput() {
    return this._primaryContact;
  }
}
export interface BigqueryAnalyticsHubListingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#create BigqueryAnalyticsHubListing#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#delete BigqueryAnalyticsHubListing#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing#update BigqueryAnalyticsHubListing#update}
  */
  readonly update?: string;
}

export function bigqueryAnalyticsHubListingTimeoutsToTerraform(struct?: BigqueryAnalyticsHubListingTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class BigqueryAnalyticsHubListingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BigqueryAnalyticsHubListingTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing google_bigquery_analytics_hub_listing}
*/
export class BigqueryAnalyticsHubListing extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_analytics_hub_listing";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_analytics_hub_listing google_bigquery_analytics_hub_listing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigqueryAnalyticsHubListingConfig
  */
  public constructor(scope: Construct, id: string, config: BigqueryAnalyticsHubListingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_analytics_hub_listing',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.63.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._categories = config.categories;
    this._dataExchangeId = config.dataExchangeId;
    this._description = config.description;
    this._displayName = config.displayName;
    this._documentation = config.documentation;
    this._icon = config.icon;
    this._id = config.id;
    this._listingId = config.listingId;
    this._location = config.location;
    this._primaryContact = config.primaryContact;
    this._project = config.project;
    this._requestAccess = config.requestAccess;
    this._bigqueryDataset.internalValue = config.bigqueryDataset;
    this._dataProvider.internalValue = config.dataProvider;
    this._publisher.internalValue = config.publisher;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // categories - computed: false, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // data_exchange_id - computed: false, optional: false, required: true
  private _dataExchangeId?: string; 
  public get dataExchangeId() {
    return this.getStringAttribute('data_exchange_id');
  }
  public set dataExchangeId(value: string) {
    this._dataExchangeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExchangeIdInput() {
    return this._dataExchangeId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // documentation - computed: false, optional: true, required: false
  private _documentation?: string; 
  public get documentation() {
    return this.getStringAttribute('documentation');
  }
  public set documentation(value: string) {
    this._documentation = value;
  }
  public resetDocumentation() {
    this._documentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentationInput() {
    return this._documentation;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // listing_id - computed: false, optional: false, required: true
  private _listingId?: string; 
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }
  public set listingId(value: string) {
    this._listingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listingIdInput() {
    return this._listingId;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary_contact - computed: false, optional: true, required: false
  private _primaryContact?: string; 
  public get primaryContact() {
    return this.getStringAttribute('primary_contact');
  }
  public set primaryContact(value: string) {
    this._primaryContact = value;
  }
  public resetPrimaryContact() {
    this._primaryContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryContactInput() {
    return this._primaryContact;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // request_access - computed: false, optional: true, required: false
  private _requestAccess?: string; 
  public get requestAccess() {
    return this.getStringAttribute('request_access');
  }
  public set requestAccess(value: string) {
    this._requestAccess = value;
  }
  public resetRequestAccess() {
    this._requestAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestAccessInput() {
    return this._requestAccess;
  }

  // bigquery_dataset - computed: false, optional: false, required: true
  private _bigqueryDataset = new BigqueryAnalyticsHubListingBigqueryDatasetOutputReference(this, "bigquery_dataset");
  public get bigqueryDataset() {
    return this._bigqueryDataset;
  }
  public putBigqueryDataset(value: BigqueryAnalyticsHubListingBigqueryDataset) {
    this._bigqueryDataset.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDatasetInput() {
    return this._bigqueryDataset.internalValue;
  }

  // data_provider - computed: false, optional: true, required: false
  private _dataProvider = new BigqueryAnalyticsHubListingDataProviderOutputReference(this, "data_provider");
  public get dataProvider() {
    return this._dataProvider;
  }
  public putDataProvider(value: BigqueryAnalyticsHubListingDataProvider) {
    this._dataProvider.internalValue = value;
  }
  public resetDataProvider() {
    this._dataProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProviderInput() {
    return this._dataProvider.internalValue;
  }

  // publisher - computed: false, optional: true, required: false
  private _publisher = new BigqueryAnalyticsHubListingPublisherOutputReference(this, "publisher");
  public get publisher() {
    return this._publisher;
  }
  public putPublisher(value: BigqueryAnalyticsHubListingPublisher) {
    this._publisher.internalValue = value;
  }
  public resetPublisher() {
    this._publisher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigqueryAnalyticsHubListingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BigqueryAnalyticsHubListingTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._categories),
      data_exchange_id: cdktf.stringToTerraform(this._dataExchangeId),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      documentation: cdktf.stringToTerraform(this._documentation),
      icon: cdktf.stringToTerraform(this._icon),
      id: cdktf.stringToTerraform(this._id),
      listing_id: cdktf.stringToTerraform(this._listingId),
      location: cdktf.stringToTerraform(this._location),
      primary_contact: cdktf.stringToTerraform(this._primaryContact),
      project: cdktf.stringToTerraform(this._project),
      request_access: cdktf.stringToTerraform(this._requestAccess),
      bigquery_dataset: bigqueryAnalyticsHubListingBigqueryDatasetToTerraform(this._bigqueryDataset.internalValue),
      data_provider: bigqueryAnalyticsHubListingDataProviderToTerraform(this._dataProvider.internalValue),
      publisher: bigqueryAnalyticsHubListingPublisherToTerraform(this._publisher.internalValue),
      timeouts: bigqueryAnalyticsHubListingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
