/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VertexAiRagEngineConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#id VertexAiRagEngineConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#project VertexAiRagEngineConfig#project}
  */
  readonly project?: string;
  /**
  * The region of the RagEngineConfig. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#region VertexAiRagEngineConfig#region}
  */
  readonly region?: string;
  /**
  * rag_managed_db_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#rag_managed_db_config VertexAiRagEngineConfig#rag_managed_db_config}
  */
  readonly ragManagedDbConfig: VertexAiRagEngineConfigRagManagedDbConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#timeouts VertexAiRagEngineConfig#timeouts}
  */
  readonly timeouts?: VertexAiRagEngineConfigTimeouts;
}
export interface VertexAiRagEngineConfigRagManagedDbConfigBasic {
}

export function vertexAiRagEngineConfigRagManagedDbConfigBasicToTerraform(struct?: VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference | VertexAiRagEngineConfigRagManagedDbConfigBasic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vertexAiRagEngineConfigRagManagedDbConfigBasicToHclTerraform(struct?: VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference | VertexAiRagEngineConfigRagManagedDbConfigBasic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagEngineConfigRagManagedDbConfigBasic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagEngineConfigRagManagedDbConfigBasic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface VertexAiRagEngineConfigRagManagedDbConfigScaled {
}

export function vertexAiRagEngineConfigRagManagedDbConfigScaledToTerraform(struct?: VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference | VertexAiRagEngineConfigRagManagedDbConfigScaled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vertexAiRagEngineConfigRagManagedDbConfigScaledToHclTerraform(struct?: VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference | VertexAiRagEngineConfigRagManagedDbConfigScaled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagEngineConfigRagManagedDbConfigScaled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagEngineConfigRagManagedDbConfigScaled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned {
}

export function vertexAiRagEngineConfigRagManagedDbConfigUnprovisionedToTerraform(struct?: VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference | VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vertexAiRagEngineConfigRagManagedDbConfigUnprovisionedToHclTerraform(struct?: VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference | VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface VertexAiRagEngineConfigRagManagedDbConfig {
  /**
  * basic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#basic VertexAiRagEngineConfig#basic}
  */
  readonly basic?: VertexAiRagEngineConfigRagManagedDbConfigBasic;
  /**
  * scaled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#scaled VertexAiRagEngineConfig#scaled}
  */
  readonly scaled?: VertexAiRagEngineConfigRagManagedDbConfigScaled;
  /**
  * unprovisioned block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#unprovisioned VertexAiRagEngineConfig#unprovisioned}
  */
  readonly unprovisioned?: VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned;
}

export function vertexAiRagEngineConfigRagManagedDbConfigToTerraform(struct?: VertexAiRagEngineConfigRagManagedDbConfigOutputReference | VertexAiRagEngineConfigRagManagedDbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic: vertexAiRagEngineConfigRagManagedDbConfigBasicToTerraform(struct!.basic),
    scaled: vertexAiRagEngineConfigRagManagedDbConfigScaledToTerraform(struct!.scaled),
    unprovisioned: vertexAiRagEngineConfigRagManagedDbConfigUnprovisionedToTerraform(struct!.unprovisioned),
  }
}


export function vertexAiRagEngineConfigRagManagedDbConfigToHclTerraform(struct?: VertexAiRagEngineConfigRagManagedDbConfigOutputReference | VertexAiRagEngineConfigRagManagedDbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic: {
      value: vertexAiRagEngineConfigRagManagedDbConfigBasicToHclTerraform(struct!.basic),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagEngineConfigRagManagedDbConfigBasicList",
    },
    scaled: {
      value: vertexAiRagEngineConfigRagManagedDbConfigScaledToHclTerraform(struct!.scaled),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagEngineConfigRagManagedDbConfigScaledList",
    },
    unprovisioned: {
      value: vertexAiRagEngineConfigRagManagedDbConfigUnprovisionedToHclTerraform(struct!.unprovisioned),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagEngineConfigRagManagedDbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagEngineConfigRagManagedDbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basic = this._basic?.internalValue;
    }
    if (this._scaled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaled = this._scaled?.internalValue;
    }
    if (this._unprovisioned?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unprovisioned = this._unprovisioned?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagEngineConfigRagManagedDbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basic.internalValue = undefined;
      this._scaled.internalValue = undefined;
      this._unprovisioned.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basic.internalValue = value.basic;
      this._scaled.internalValue = value.scaled;
      this._unprovisioned.internalValue = value.unprovisioned;
    }
  }

  // basic - computed: false, optional: true, required: false
  private _basic = new VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference(this, "basic");
  public get basic() {
    return this._basic;
  }
  public putBasic(value: VertexAiRagEngineConfigRagManagedDbConfigBasic) {
    this._basic.internalValue = value;
  }
  public resetBasic() {
    this._basic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicInput() {
    return this._basic.internalValue;
  }

  // scaled - computed: false, optional: true, required: false
  private _scaled = new VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference(this, "scaled");
  public get scaled() {
    return this._scaled;
  }
  public putScaled(value: VertexAiRagEngineConfigRagManagedDbConfigScaled) {
    this._scaled.internalValue = value;
  }
  public resetScaled() {
    this._scaled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaledInput() {
    return this._scaled.internalValue;
  }

  // unprovisioned - computed: false, optional: true, required: false
  private _unprovisioned = new VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference(this, "unprovisioned");
  public get unprovisioned() {
    return this._unprovisioned;
  }
  public putUnprovisioned(value: VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned) {
    this._unprovisioned.internalValue = value;
  }
  public resetUnprovisioned() {
    this._unprovisioned.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unprovisionedInput() {
    return this._unprovisioned.internalValue;
  }
}
export interface VertexAiRagEngineConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#create VertexAiRagEngineConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#delete VertexAiRagEngineConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#update VertexAiRagEngineConfig#update}
  */
  readonly update?: string;
}

export function vertexAiRagEngineConfigTimeoutsToTerraform(struct?: VertexAiRagEngineConfigTimeouts | cdktf.IResolvable): any {
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


export function vertexAiRagEngineConfigTimeoutsToHclTerraform(struct?: VertexAiRagEngineConfigTimeouts | cdktf.IResolvable): any {
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

export class VertexAiRagEngineConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiRagEngineConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VertexAiRagEngineConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config google_vertex_ai_rag_engine_config}
*/
export class VertexAiRagEngineConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_rag_engine_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VertexAiRagEngineConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VertexAiRagEngineConfig to import
  * @param importFromId The id of the existing VertexAiRagEngineConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VertexAiRagEngineConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_rag_engine_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/vertex_ai_rag_engine_config google_vertex_ai_rag_engine_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiRagEngineConfigConfig
  */
  public constructor(scope: Construct, id: string, config: VertexAiRagEngineConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_rag_engine_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.49.3',
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
    this._id = config.id;
    this._project = config.project;
    this._region = config.region;
    this._ragManagedDbConfig.internalValue = config.ragManagedDbConfig;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // rag_managed_db_config - computed: false, optional: false, required: true
  private _ragManagedDbConfig = new VertexAiRagEngineConfigRagManagedDbConfigOutputReference(this, "rag_managed_db_config");
  public get ragManagedDbConfig() {
    return this._ragManagedDbConfig;
  }
  public putRagManagedDbConfig(value: VertexAiRagEngineConfigRagManagedDbConfig) {
    this._ragManagedDbConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ragManagedDbConfigInput() {
    return this._ragManagedDbConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VertexAiRagEngineConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiRagEngineConfigTimeouts) {
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
      region: cdktf.stringToTerraform(this._region),
      rag_managed_db_config: vertexAiRagEngineConfigRagManagedDbConfigToTerraform(this._ragManagedDbConfig.internalValue),
      timeouts: vertexAiRagEngineConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rag_managed_db_config: {
        value: vertexAiRagEngineConfigRagManagedDbConfigToHclTerraform(this._ragManagedDbConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiRagEngineConfigRagManagedDbConfigList",
      },
      timeouts: {
        value: vertexAiRagEngineConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VertexAiRagEngineConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
