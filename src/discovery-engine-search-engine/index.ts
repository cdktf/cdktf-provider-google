// https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiscoveryEngineSearchEngineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The collection ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine#collection_id DiscoveryEngineSearchEngine#collection_id}
  */
  readonly collectionId: string;
  /**
  * The data stores associated with this engine. For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine#data_store_ids DiscoveryEngineSearchEngine#data_store_ids}
  */
  readonly dataStoreIds: string[];
  /**
  * Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine#display_name DiscoveryEngineSearchEngine#display_name}
  */
  readonly displayName: string;
  /**
  * Unique ID to use for Search Engine App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine#engine_id DiscoveryEngineSearchEngine#engine_id}
  */
  readonly engineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine#id DiscoveryEngineSearchEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine#industry_vertical DiscoveryEngineSearchEngine#industry_vertical}
  */
  readonly industryVertical?: string;
  /**
  * Location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine#location DiscoveryEngineSearchEngine#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine#project DiscoveryEngineSearchEngine#project}
  */
  readonly project?: string;
  /**
  * common_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine#common_config DiscoveryEngineSearchEngine#common_config}
  */
  readonly commonConfig?: DiscoveryEngineSearchEngineCommonConfig;
  /**
  * search_engine_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine#search_engine_config DiscoveryEngineSearchEngine#search_engine_config}
  */
  readonly searchEngineConfig: DiscoveryEngineSearchEngineSearchEngineConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine#timeouts DiscoveryEngineSearchEngine#timeouts}
  */
  readonly timeouts?: DiscoveryEngineSearchEngineTimeouts;
}
export interface DiscoveryEngineSearchEngineCommonConfig {
  /**
  * The name of the company, business or entity that is associated with the engine. Setting this may help improve LLM related features.cd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine#company_name DiscoveryEngineSearchEngine#company_name}
  */
  readonly companyName?: string;
}

export function discoveryEngineSearchEngineCommonConfigToTerraform(struct?: DiscoveryEngineSearchEngineCommonConfigOutputReference | DiscoveryEngineSearchEngineCommonConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    company_name: cdktf.stringToTerraform(struct!.companyName),
  }
}


export function discoveryEngineSearchEngineCommonConfigToHclTerraform(struct?: DiscoveryEngineSearchEngineCommonConfigOutputReference | DiscoveryEngineSearchEngineCommonConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    company_name: {
      value: cdktf.stringToHclTerraform(struct!.companyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineSearchEngineCommonConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineSearchEngineCommonConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._companyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyName = this._companyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineSearchEngineCommonConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._companyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._companyName = value.companyName;
    }
  }

  // company_name - computed: false, optional: true, required: false
  private _companyName?: string; 
  public get companyName() {
    return this.getStringAttribute('company_name');
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  public resetCompanyName() {
    this._companyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName;
  }
}
export interface DiscoveryEngineSearchEngineSearchEngineConfig {
  /**
  * The add-on that this search engine enables. Possible values: ["SEARCH_ADD_ON_LLM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine#search_add_ons DiscoveryEngineSearchEngine#search_add_ons}
  */
  readonly searchAddOns?: string[];
  /**
  * The search feature tier of this engine. Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified. Default value: "SEARCH_TIER_STANDARD" Possible values: ["SEARCH_TIER_STANDARD", "SEARCH_TIER_ENTERPRISE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine#search_tier DiscoveryEngineSearchEngine#search_tier}
  */
  readonly searchTier?: string;
}

export function discoveryEngineSearchEngineSearchEngineConfigToTerraform(struct?: DiscoveryEngineSearchEngineSearchEngineConfigOutputReference | DiscoveryEngineSearchEngineSearchEngineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_add_ons: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchAddOns),
    search_tier: cdktf.stringToTerraform(struct!.searchTier),
  }
}


export function discoveryEngineSearchEngineSearchEngineConfigToHclTerraform(struct?: DiscoveryEngineSearchEngineSearchEngineConfigOutputReference | DiscoveryEngineSearchEngineSearchEngineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    search_add_ons: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchAddOns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    search_tier: {
      value: cdktf.stringToHclTerraform(struct!.searchTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineSearchEngineSearchEngineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineSearchEngineSearchEngineConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._searchAddOns !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchAddOns = this._searchAddOns;
    }
    if (this._searchTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchTier = this._searchTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineSearchEngineSearchEngineConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._searchAddOns = undefined;
      this._searchTier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._searchAddOns = value.searchAddOns;
      this._searchTier = value.searchTier;
    }
  }

  // search_add_ons - computed: false, optional: true, required: false
  private _searchAddOns?: string[]; 
  public get searchAddOns() {
    return this.getListAttribute('search_add_ons');
  }
  public set searchAddOns(value: string[]) {
    this._searchAddOns = value;
  }
  public resetSearchAddOns() {
    this._searchAddOns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchAddOnsInput() {
    return this._searchAddOns;
  }

  // search_tier - computed: false, optional: true, required: false
  private _searchTier?: string; 
  public get searchTier() {
    return this.getStringAttribute('search_tier');
  }
  public set searchTier(value: string) {
    this._searchTier = value;
  }
  public resetSearchTier() {
    this._searchTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTierInput() {
    return this._searchTier;
  }
}
export interface DiscoveryEngineSearchEngineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine#create DiscoveryEngineSearchEngine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine#delete DiscoveryEngineSearchEngine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine#update DiscoveryEngineSearchEngine#update}
  */
  readonly update?: string;
}

export function discoveryEngineSearchEngineTimeoutsToTerraform(struct?: DiscoveryEngineSearchEngineTimeouts | cdktf.IResolvable): any {
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


export function discoveryEngineSearchEngineTimeoutsToHclTerraform(struct?: DiscoveryEngineSearchEngineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineSearchEngineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryEngineSearchEngineTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DiscoveryEngineSearchEngineTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine google_discovery_engine_search_engine}
*/
export class DiscoveryEngineSearchEngine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_discovery_engine_search_engine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiscoveryEngineSearchEngine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiscoveryEngineSearchEngine to import
  * @param importFromId The id of the existing DiscoveryEngineSearchEngine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiscoveryEngineSearchEngine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_discovery_engine_search_engine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/discovery_engine_search_engine google_discovery_engine_search_engine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryEngineSearchEngineConfig
  */
  public constructor(scope: Construct, id: string, config: DiscoveryEngineSearchEngineConfig) {
    super(scope, id, {
      terraformResourceType: 'google_discovery_engine_search_engine',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.13.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._collectionId = config.collectionId;
    this._dataStoreIds = config.dataStoreIds;
    this._displayName = config.displayName;
    this._engineId = config.engineId;
    this._id = config.id;
    this._industryVertical = config.industryVertical;
    this._location = config.location;
    this._project = config.project;
    this._commonConfig.internalValue = config.commonConfig;
    this._searchEngineConfig.internalValue = config.searchEngineConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collection_id - computed: false, optional: false, required: true
  private _collectionId?: string; 
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }
  public set collectionId(value: string) {
    this._collectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_store_ids - computed: false, optional: false, required: true
  private _dataStoreIds?: string[]; 
  public get dataStoreIds() {
    return this.getListAttribute('data_store_ids');
  }
  public set dataStoreIds(value: string[]) {
    this._dataStoreIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreIdsInput() {
    return this._dataStoreIds;
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

  // engine_id - computed: false, optional: false, required: true
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
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

  // industry_vertical - computed: false, optional: true, required: false
  private _industryVertical?: string; 
  public get industryVertical() {
    return this.getStringAttribute('industry_vertical');
  }
  public set industryVertical(value: string) {
    this._industryVertical = value;
  }
  public resetIndustryVertical() {
    this._industryVertical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get industryVerticalInput() {
    return this._industryVertical;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // common_config - computed: false, optional: true, required: false
  private _commonConfig = new DiscoveryEngineSearchEngineCommonConfigOutputReference(this, "common_config");
  public get commonConfig() {
    return this._commonConfig;
  }
  public putCommonConfig(value: DiscoveryEngineSearchEngineCommonConfig) {
    this._commonConfig.internalValue = value;
  }
  public resetCommonConfig() {
    this._commonConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonConfigInput() {
    return this._commonConfig.internalValue;
  }

  // search_engine_config - computed: false, optional: false, required: true
  private _searchEngineConfig = new DiscoveryEngineSearchEngineSearchEngineConfigOutputReference(this, "search_engine_config");
  public get searchEngineConfig() {
    return this._searchEngineConfig;
  }
  public putSearchEngineConfig(value: DiscoveryEngineSearchEngineSearchEngineConfig) {
    this._searchEngineConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchEngineConfigInput() {
    return this._searchEngineConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DiscoveryEngineSearchEngineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DiscoveryEngineSearchEngineTimeouts) {
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
      collection_id: cdktf.stringToTerraform(this._collectionId),
      data_store_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataStoreIds),
      display_name: cdktf.stringToTerraform(this._displayName),
      engine_id: cdktf.stringToTerraform(this._engineId),
      id: cdktf.stringToTerraform(this._id),
      industry_vertical: cdktf.stringToTerraform(this._industryVertical),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      common_config: discoveryEngineSearchEngineCommonConfigToTerraform(this._commonConfig.internalValue),
      search_engine_config: discoveryEngineSearchEngineSearchEngineConfigToTerraform(this._searchEngineConfig.internalValue),
      timeouts: discoveryEngineSearchEngineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collection_id: {
        value: cdktf.stringToHclTerraform(this._collectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_store_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataStoreIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_id: {
        value: cdktf.stringToHclTerraform(this._engineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      industry_vertical: {
        value: cdktf.stringToHclTerraform(this._industryVertical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      common_config: {
        value: discoveryEngineSearchEngineCommonConfigToHclTerraform(this._commonConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineSearchEngineCommonConfigList",
      },
      search_engine_config: {
        value: discoveryEngineSearchEngineSearchEngineConfigToHclTerraform(this._searchEngineConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineSearchEngineSearchEngineConfigList",
      },
      timeouts: {
        value: discoveryEngineSearchEngineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DiscoveryEngineSearchEngineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
