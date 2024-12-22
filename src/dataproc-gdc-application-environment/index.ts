/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_application_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataprocGdcApplicationEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The annotations to associate with this application environment. Annotations may be used to store client information, but are not used by the server.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_application_environment#annotations DataprocGdcApplicationEnvironment#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The id of the application environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_application_environment#application_environment_id DataprocGdcApplicationEnvironment#application_environment_id}
  */
  readonly applicationEnvironmentId?: string;
  /**
  * User-provided human-readable name to be used in user interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_application_environment#display_name DataprocGdcApplicationEnvironment#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_application_environment#id DataprocGdcApplicationEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels to associate with this application environment. Labels may be used for filtering and billing tracking. 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_application_environment#labels DataprocGdcApplicationEnvironment#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the application environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_application_environment#location DataprocGdcApplicationEnvironment#location}
  */
  readonly location: string;
  /**
  * The name of the namespace in which to create this ApplicationEnvironment. This namespace must already exist in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_application_environment#namespace DataprocGdcApplicationEnvironment#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_application_environment#project DataprocGdcApplicationEnvironment#project}
  */
  readonly project?: string;
  /**
  * The id of the service instance to which this application environment belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_application_environment#serviceinstance DataprocGdcApplicationEnvironment#serviceinstance}
  */
  readonly serviceinstance: string;
  /**
  * spark_application_environment_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_application_environment#spark_application_environment_config DataprocGdcApplicationEnvironment#spark_application_environment_config}
  */
  readonly sparkApplicationEnvironmentConfig?: DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_application_environment#timeouts DataprocGdcApplicationEnvironment#timeouts}
  */
  readonly timeouts?: DataprocGdcApplicationEnvironmentTimeouts;
}
export interface DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig {
  /**
  * A map of default Spark properties to apply to workloads in this application environment. These defaults may be overridden by per-application properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_application_environment#default_properties DataprocGdcApplicationEnvironment#default_properties}
  */
  readonly defaultProperties?: { [key: string]: string };
  /**
  * The default Dataproc version to use for applications submitted to this application environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_application_environment#default_version DataprocGdcApplicationEnvironment#default_version}
  */
  readonly defaultVersion?: string;
}

export function dataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigToTerraform(struct?: DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference | DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.defaultProperties),
    default_version: cdktf.stringToTerraform(struct!.defaultVersion),
  }
}


export function dataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigToHclTerraform(struct?: DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference | DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.defaultProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    default_version: {
      value: cdktf.stringToHclTerraform(struct!.defaultVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultProperties = this._defaultProperties;
    }
    if (this._defaultVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVersion = this._defaultVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultProperties = undefined;
      this._defaultVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultProperties = value.defaultProperties;
      this._defaultVersion = value.defaultVersion;
    }
  }

  // default_properties - computed: false, optional: true, required: false
  private _defaultProperties?: { [key: string]: string }; 
  public get defaultProperties() {
    return this.getStringMapAttribute('default_properties');
  }
  public set defaultProperties(value: { [key: string]: string }) {
    this._defaultProperties = value;
  }
  public resetDefaultProperties() {
    this._defaultProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPropertiesInput() {
    return this._defaultProperties;
  }

  // default_version - computed: false, optional: true, required: false
  private _defaultVersion?: string; 
  public get defaultVersion() {
    return this.getStringAttribute('default_version');
  }
  public set defaultVersion(value: string) {
    this._defaultVersion = value;
  }
  public resetDefaultVersion() {
    this._defaultVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVersionInput() {
    return this._defaultVersion;
  }
}
export interface DataprocGdcApplicationEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_application_environment#create DataprocGdcApplicationEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_application_environment#delete DataprocGdcApplicationEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_application_environment#update DataprocGdcApplicationEnvironment#update}
  */
  readonly update?: string;
}

export function dataprocGdcApplicationEnvironmentTimeoutsToTerraform(struct?: DataprocGdcApplicationEnvironmentTimeouts | cdktf.IResolvable): any {
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


export function dataprocGdcApplicationEnvironmentTimeoutsToHclTerraform(struct?: DataprocGdcApplicationEnvironmentTimeouts | cdktf.IResolvable): any {
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

export class DataprocGdcApplicationEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataprocGdcApplicationEnvironmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataprocGdcApplicationEnvironmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_application_environment google_dataproc_gdc_application_environment}
*/
export class DataprocGdcApplicationEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataproc_gdc_application_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataprocGdcApplicationEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataprocGdcApplicationEnvironment to import
  * @param importFromId The id of the existing DataprocGdcApplicationEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_application_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataprocGdcApplicationEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dataproc_gdc_application_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_application_environment google_dataproc_gdc_application_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataprocGdcApplicationEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataprocGdcApplicationEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataproc_gdc_application_environment',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.14.1',
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
    this._annotations = config.annotations;
    this._applicationEnvironmentId = config.applicationEnvironmentId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._namespace = config.namespace;
    this._project = config.project;
    this._serviceinstance = config.serviceinstance;
    this._sparkApplicationEnvironmentConfig.internalValue = config.sparkApplicationEnvironmentConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // application_environment_id - computed: false, optional: true, required: false
  private _applicationEnvironmentId?: string; 
  public get applicationEnvironmentId() {
    return this.getStringAttribute('application_environment_id');
  }
  public set applicationEnvironmentId(value: string) {
    this._applicationEnvironmentId = value;
  }
  public resetApplicationEnvironmentId() {
    this._applicationEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationEnvironmentIdInput() {
    return this._applicationEnvironmentId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
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

  // serviceinstance - computed: false, optional: false, required: true
  private _serviceinstance?: string; 
  public get serviceinstance() {
    return this.getStringAttribute('serviceinstance');
  }
  public set serviceinstance(value: string) {
    this._serviceinstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceinstanceInput() {
    return this._serviceinstance;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // spark_application_environment_config - computed: false, optional: true, required: false
  private _sparkApplicationEnvironmentConfig = new DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference(this, "spark_application_environment_config");
  public get sparkApplicationEnvironmentConfig() {
    return this._sparkApplicationEnvironmentConfig;
  }
  public putSparkApplicationEnvironmentConfig(value: DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig) {
    this._sparkApplicationEnvironmentConfig.internalValue = value;
  }
  public resetSparkApplicationEnvironmentConfig() {
    this._sparkApplicationEnvironmentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkApplicationEnvironmentConfigInput() {
    return this._sparkApplicationEnvironmentConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataprocGdcApplicationEnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataprocGdcApplicationEnvironmentTimeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      application_environment_id: cdktf.stringToTerraform(this._applicationEnvironmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      namespace: cdktf.stringToTerraform(this._namespace),
      project: cdktf.stringToTerraform(this._project),
      serviceinstance: cdktf.stringToTerraform(this._serviceinstance),
      spark_application_environment_config: dataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigToTerraform(this._sparkApplicationEnvironmentConfig.internalValue),
      timeouts: dataprocGdcApplicationEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      application_environment_id: {
        value: cdktf.stringToHclTerraform(this._applicationEnvironmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
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
      serviceinstance: {
        value: cdktf.stringToHclTerraform(this._serviceinstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spark_application_environment_config: {
        value: dataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigToHclTerraform(this._sparkApplicationEnvironmentConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigList",
      },
      timeouts: {
        value: dataprocGdcApplicationEnvironmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataprocGdcApplicationEnvironmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
