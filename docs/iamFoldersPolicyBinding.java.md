# `iamFoldersPolicyBinding` Submodule <a name="`iamFoldersPolicyBinding` Submodule" id="@cdktf/provider-google.iamFoldersPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamFoldersPolicyBinding <a name="IamFoldersPolicyBinding" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding google_iam_folders_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_folders_policy_binding.IamFoldersPolicyBinding;

IamFoldersPolicyBinding.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .folder(java.lang.String)
    .location(java.lang.String)
    .policy(java.lang.String)
    .policyBindingId(java.lang.String)
    .target(IamFoldersPolicyBindingTarget)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .condition(IamFoldersPolicyBindingCondition)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .policyKind(java.lang.String)
//  .timeouts(IamFoldersPolicyBindingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.folder">folder</a></code> | <code>java.lang.String</code> | The parent folder for the PolicyBinding. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the PolicyBinding. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.policy">policy</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.policyBindingId">policyBindingId</a></code> | <code>java.lang.String</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#id IamFoldersPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.policyKind">policyKind</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts">IamFoldersPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.folder"></a>

- *Type:* java.lang.String

The parent folder for the PolicyBinding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#folder IamFoldersPolicyBinding#folder}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the PolicyBinding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#location IamFoldersPolicyBinding#location}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.policy"></a>

- *Type:* java.lang.String

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#policy IamFoldersPolicyBinding#policy}

---

##### `policyBindingId`<sup>Required</sup> <a name="policyBindingId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.policyBindingId"></a>

- *Type:* java.lang.String

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#policy_binding_id IamFoldersPolicyBinding#policy_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#target IamFoldersPolicyBinding#target}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#annotations IamFoldersPolicyBinding#annotations}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#condition IamFoldersPolicyBinding#condition}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#display_name IamFoldersPolicyBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#id IamFoldersPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyKind`<sup>Optional</sup> <a name="policyKind" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.policyKind"></a>

- *Type:* java.lang.String

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#policy_kind IamFoldersPolicyBinding#policy_kind}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts">IamFoldersPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#timeouts IamFoldersPolicyBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetPolicyKind">resetPolicyKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putCondition"></a>

```java
public void putCondition(IamFoldersPolicyBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putTarget"></a>

```java
public void putTarget(IamFoldersPolicyBindingTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putTimeouts"></a>

```java
public void putTimeouts(IamFoldersPolicyBindingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts">IamFoldersPolicyBindingTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetId"></a>

```java
public void resetId()
```

##### `resetPolicyKind` <a name="resetPolicyKind" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetPolicyKind"></a>

```java
public void resetPolicyKind()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamFoldersPolicyBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_folders_policy_binding.IamFoldersPolicyBinding;

IamFoldersPolicyBinding.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_folders_policy_binding.IamFoldersPolicyBinding;

IamFoldersPolicyBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_folders_policy_binding.IamFoldersPolicyBinding;

IamFoldersPolicyBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_folders_policy_binding.IamFoldersPolicyBinding;

IamFoldersPolicyBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IamFoldersPolicyBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IamFoldersPolicyBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IamFoldersPolicyBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IamFoldersPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IamFoldersPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference">IamFoldersPolicyBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyUid">policyUid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.target">target</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference">IamFoldersPolicyBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference">IamFoldersPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyBindingIdInput">policyBindingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyKindInput">policyKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts">IamFoldersPolicyBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyBindingId">policyBindingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyKind">policyKind</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.condition"></a>

```java
public IamFoldersPolicyBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference">IamFoldersPolicyBindingConditionOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyUid`<sup>Required</sup> <a name="policyUid" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyUid"></a>

```java
public java.lang.String getPolicyUid();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.target"></a>

```java
public IamFoldersPolicyBindingTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference">IamFoldersPolicyBindingTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.timeouts"></a>

```java
public IamFoldersPolicyBindingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference">IamFoldersPolicyBindingTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.conditionInput"></a>

```java
public IamFoldersPolicyBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `policyBindingIdInput`<sup>Optional</sup> <a name="policyBindingIdInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyBindingIdInput"></a>

```java
public java.lang.String getPolicyBindingIdInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `policyKindInput`<sup>Optional</sup> <a name="policyKindInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyKindInput"></a>

```java
public java.lang.String getPolicyKindInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.targetInput"></a>

```java
public IamFoldersPolicyBindingTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts">IamFoldersPolicyBindingTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `policyBindingId`<sup>Required</sup> <a name="policyBindingId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyBindingId"></a>

```java
public java.lang.String getPolicyBindingId();
```

- *Type:* java.lang.String

---

##### `policyKind`<sup>Required</sup> <a name="policyKind" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyKind"></a>

```java
public java.lang.String getPolicyKind();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IamFoldersPolicyBindingCondition <a name="IamFoldersPolicyBindingCondition" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_folders_policy_binding.IamFoldersPolicyBindingCondition;

IamFoldersPolicyBindingCondition.builder()
//  .description(java.lang.String)
//  .expression(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.location">location</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#description IamFoldersPolicyBinding#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#expression IamFoldersPolicyBinding#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#location IamFoldersPolicyBinding#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#title IamFoldersPolicyBinding#title}

---

### IamFoldersPolicyBindingConfig <a name="IamFoldersPolicyBindingConfig" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_folders_policy_binding.IamFoldersPolicyBindingConfig;

IamFoldersPolicyBindingConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .folder(java.lang.String)
    .location(java.lang.String)
    .policy(java.lang.String)
    .policyBindingId(java.lang.String)
    .target(IamFoldersPolicyBindingTarget)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .condition(IamFoldersPolicyBindingCondition)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .policyKind(java.lang.String)
//  .timeouts(IamFoldersPolicyBindingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | The parent folder for the PolicyBinding. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the PolicyBinding. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.policy">policy</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.policyBindingId">policyBindingId</a></code> | <code>java.lang.String</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#id IamFoldersPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.policyKind">policyKind</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts">IamFoldersPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

The parent folder for the PolicyBinding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#folder IamFoldersPolicyBinding#folder}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the PolicyBinding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#location IamFoldersPolicyBinding#location}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#policy IamFoldersPolicyBinding#policy}

---

##### `policyBindingId`<sup>Required</sup> <a name="policyBindingId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.policyBindingId"></a>

```java
public java.lang.String getPolicyBindingId();
```

- *Type:* java.lang.String

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#policy_binding_id IamFoldersPolicyBinding#policy_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.target"></a>

```java
public IamFoldersPolicyBindingTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#target IamFoldersPolicyBinding#target}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#annotations IamFoldersPolicyBinding#annotations}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.condition"></a>

```java
public IamFoldersPolicyBindingCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#condition IamFoldersPolicyBinding#condition}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#display_name IamFoldersPolicyBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#id IamFoldersPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyKind`<sup>Optional</sup> <a name="policyKind" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.policyKind"></a>

```java
public java.lang.String getPolicyKind();
```

- *Type:* java.lang.String

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#policy_kind IamFoldersPolicyBinding#policy_kind}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.timeouts"></a>

```java
public IamFoldersPolicyBindingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts">IamFoldersPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#timeouts IamFoldersPolicyBinding#timeouts}

---

### IamFoldersPolicyBindingTarget <a name="IamFoldersPolicyBindingTarget" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_folders_policy_binding.IamFoldersPolicyBindingTarget;

IamFoldersPolicyBindingTarget.builder()
//  .principalSet(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget.property.principalSet">principalSet</a></code> | <code>java.lang.String</code> | Required. |

---

##### `principalSet`<sup>Optional</sup> <a name="principalSet" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget.property.principalSet"></a>

```java
public java.lang.String getPrincipalSet();
```

- *Type:* java.lang.String

Required.

Immutable. Full Resource Name of the principal set used for principal access boundary policy bindings.
Examples for each one of the following supported principal set types:

* Folder: '//cloudresourcemanager.googleapis.com/folders/FOLDER_ID'
  It must be parent by the policy binding's parent (the folder).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#principal_set IamFoldersPolicyBinding#principal_set}

---

### IamFoldersPolicyBindingTimeouts <a name="IamFoldersPolicyBindingTimeouts" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_folders_policy_binding.IamFoldersPolicyBindingTimeouts;

IamFoldersPolicyBindingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#create IamFoldersPolicyBinding#create}. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#delete IamFoldersPolicyBinding#delete}. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#update IamFoldersPolicyBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#create IamFoldersPolicyBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#delete IamFoldersPolicyBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_folders_policy_binding#update IamFoldersPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamFoldersPolicyBindingConditionOutputReference <a name="IamFoldersPolicyBindingConditionOutputReference" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_folders_policy_binding.IamFoldersPolicyBindingConditionOutputReference;

new IamFoldersPolicyBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.internalValue"></a>

```java
public IamFoldersPolicyBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a>

---


### IamFoldersPolicyBindingTargetOutputReference <a name="IamFoldersPolicyBindingTargetOutputReference" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_folders_policy_binding.IamFoldersPolicyBindingTargetOutputReference;

new IamFoldersPolicyBindingTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.resetPrincipalSet">resetPrincipalSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrincipalSet` <a name="resetPrincipalSet" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.resetPrincipalSet"></a>

```java
public void resetPrincipalSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.principalSetInput">principalSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.principalSet">principalSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalSetInput`<sup>Optional</sup> <a name="principalSetInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.principalSetInput"></a>

```java
public java.lang.String getPrincipalSetInput();
```

- *Type:* java.lang.String

---

##### `principalSet`<sup>Required</sup> <a name="principalSet" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.principalSet"></a>

```java
public java.lang.String getPrincipalSet();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.internalValue"></a>

```java
public IamFoldersPolicyBindingTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a>

---


### IamFoldersPolicyBindingTimeoutsOutputReference <a name="IamFoldersPolicyBindingTimeoutsOutputReference" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_folders_policy_binding.IamFoldersPolicyBindingTimeoutsOutputReference;

new IamFoldersPolicyBindingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts">IamFoldersPolicyBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts">IamFoldersPolicyBindingTimeouts</a>

---



