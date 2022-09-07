// https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEngineApplicationUrlDispatchRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#id AppEngineApplicationUrlDispatchRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#project AppEngineApplicationUrlDispatchRules#project}
  */
  readonly project?: string;
  /**
  * dispatch_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#dispatch_rules AppEngineApplicationUrlDispatchRules#dispatch_rules}
  */
  readonly dispatchRules: AppEngineApplicationUrlDispatchRulesDispatchRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#timeouts AppEngineApplicationUrlDispatchRules#timeouts}
  */
  readonly timeouts?: AppEngineApplicationUrlDispatchRulesTimeouts;
}
export interface AppEngineApplicationUrlDispatchRulesDispatchRules {
  /**
  * Domain name to match against. The wildcard "*" is supported if specified before a period: "*.".
Defaults to matching all domains: "*".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#domain AppEngineApplicationUrlDispatchRules#domain}
  */
  readonly domain?: string;
  /**
  * Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#path AppEngineApplicationUrlDispatchRules#path}
  */
  readonly path: string;
  /**
  * Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#service AppEngineApplicationUrlDispatchRules#service}
  */
  readonly service: string;
}

export function appEngineApplicationUrlDispatchRulesDispatchRulesToTerraform(struct?: AppEngineApplicationUrlDispatchRulesDispatchRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    path: cdktf.stringToTerraform(struct!.path),
    service: cdktf.stringToTerraform(struct!.service),
  }
}

export class AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppEngineApplicationUrlDispatchRulesDispatchRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineApplicationUrlDispatchRulesDispatchRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._path = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._path = value.path;
      this._service = value.service;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class AppEngineApplicationUrlDispatchRulesDispatchRulesList extends cdktf.ComplexList {
  public internalValue? : AppEngineApplicationUrlDispatchRulesDispatchRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference {
    return new AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppEngineApplicationUrlDispatchRulesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#create AppEngineApplicationUrlDispatchRules#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#delete AppEngineApplicationUrlDispatchRules#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules#update AppEngineApplicationUrlDispatchRules#update}
  */
  readonly update?: string;
}

export function appEngineApplicationUrlDispatchRulesTimeoutsToTerraform(struct?: AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference | AppEngineApplicationUrlDispatchRulesTimeouts | cdktf.IResolvable): any {
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

export class AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineApplicationUrlDispatchRulesTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppEngineApplicationUrlDispatchRulesTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules google_app_engine_application_url_dispatch_rules}
*/
export class AppEngineApplicationUrlDispatchRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_app_engine_application_url_dispatch_rules";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules google_app_engine_application_url_dispatch_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppEngineApplicationUrlDispatchRulesConfig
  */
  public constructor(scope: Construct, id: string, config: AppEngineApplicationUrlDispatchRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_application_url_dispatch_rules',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
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
    this._id = config.id;
    this._project = config.project;
    this._dispatchRules.internalValue = config.dispatchRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dispatch_rules - computed: false, optional: false, required: true
  private _dispatchRules = new AppEngineApplicationUrlDispatchRulesDispatchRulesList(this, "dispatch_rules", false);
  public get dispatchRules() {
    return this._dispatchRules;
  }
  public putDispatchRules(value: AppEngineApplicationUrlDispatchRulesDispatchRules[] | cdktf.IResolvable) {
    this._dispatchRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchRulesInput() {
    return this._dispatchRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppEngineApplicationUrlDispatchRulesTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      dispatch_rules: cdktf.listMapper(appEngineApplicationUrlDispatchRulesDispatchRulesToTerraform, true)(this._dispatchRules.internalValue),
      timeouts: appEngineApplicationUrlDispatchRulesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
