# `iamProjectsPolicyBinding` Submodule <a name="`iamProjectsPolicyBinding` Submodule" id="@cdktf/provider-google.iamProjectsPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamProjectsPolicyBinding <a name="IamProjectsPolicyBinding" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding google_iam_projects_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_projects_policy_binding.IamProjectsPolicyBinding;

IamProjectsPolicyBinding.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .policy(java.lang.String)
    .policyBindingId(java.lang.String)
    .target(IamProjectsPolicyBindingTarget)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .condition(IamProjectsPolicyBindingCondition)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .policyKind(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(IamProjectsPolicyBindingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the Policy Binding. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.policy">policy</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.policyBindingId">policyBindingId</a></code> | <code>java.lang.String</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#id IamProjectsPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.policyKind">policyKind</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#project IamProjectsPolicyBinding#project}. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#location IamProjectsPolicyBinding#location}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.policy"></a>

- *Type:* java.lang.String

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#policy IamProjectsPolicyBinding#policy}

---

##### `policyBindingId`<sup>Required</sup> <a name="policyBindingId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.policyBindingId"></a>

- *Type:* java.lang.String

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#policy_binding_id IamProjectsPolicyBinding#policy_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#target IamProjectsPolicyBinding#target}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#annotations IamProjectsPolicyBinding#annotations}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#condition IamProjectsPolicyBinding#condition}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#display_name IamProjectsPolicyBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#id IamProjectsPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyKind`<sup>Optional</sup> <a name="policyKind" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.policyKind"></a>

- *Type:* java.lang.String

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#policy_kind IamProjectsPolicyBinding#policy_kind}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#project IamProjectsPolicyBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#timeouts IamProjectsPolicyBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetPolicyKind">resetPolicyKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putCondition"></a>

```java
public void putCondition(IamProjectsPolicyBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTarget"></a>

```java
public void putTarget(IamProjectsPolicyBindingTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTimeouts"></a>

```java
public void putTimeouts(IamProjectsPolicyBindingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetId"></a>

```java
public void resetId()
```

##### `resetPolicyKind` <a name="resetPolicyKind" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetPolicyKind"></a>

```java
public void resetPolicyKind()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamProjectsPolicyBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_projects_policy_binding.IamProjectsPolicyBinding;

IamProjectsPolicyBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_projects_policy_binding.IamProjectsPolicyBinding;

IamProjectsPolicyBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_projects_policy_binding.IamProjectsPolicyBinding;

IamProjectsPolicyBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_projects_policy_binding.IamProjectsPolicyBinding;

IamProjectsPolicyBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IamProjectsPolicyBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IamProjectsPolicyBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IamProjectsPolicyBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IamProjectsPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IamProjectsPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference">IamProjectsPolicyBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyUid">policyUid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.target">target</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference">IamProjectsPolicyBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference">IamProjectsPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyBindingIdInput">policyBindingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyKindInput">policyKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyBindingId">policyBindingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyKind">policyKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.condition"></a>

```java
public IamProjectsPolicyBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference">IamProjectsPolicyBindingConditionOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyUid`<sup>Required</sup> <a name="policyUid" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyUid"></a>

```java
public java.lang.String getPolicyUid();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.target"></a>

```java
public IamProjectsPolicyBindingTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference">IamProjectsPolicyBindingTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.timeouts"></a>

```java
public IamProjectsPolicyBindingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference">IamProjectsPolicyBindingTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.conditionInput"></a>

```java
public IamProjectsPolicyBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `policyBindingIdInput`<sup>Optional</sup> <a name="policyBindingIdInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyBindingIdInput"></a>

```java
public java.lang.String getPolicyBindingIdInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `policyKindInput`<sup>Optional</sup> <a name="policyKindInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyKindInput"></a>

```java
public java.lang.String getPolicyKindInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.targetInput"></a>

```java
public IamProjectsPolicyBindingTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `policyBindingId`<sup>Required</sup> <a name="policyBindingId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyBindingId"></a>

```java
public java.lang.String getPolicyBindingId();
```

- *Type:* java.lang.String

---

##### `policyKind`<sup>Required</sup> <a name="policyKind" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyKind"></a>

```java
public java.lang.String getPolicyKind();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IamProjectsPolicyBindingCondition <a name="IamProjectsPolicyBindingCondition" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_projects_policy_binding.IamProjectsPolicyBindingCondition;

IamProjectsPolicyBindingCondition.builder()
//  .description(java.lang.String)
//  .expression(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.location">location</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#description IamProjectsPolicyBinding#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#expression IamProjectsPolicyBinding#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#location IamProjectsPolicyBinding#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#title IamProjectsPolicyBinding#title}

---

### IamProjectsPolicyBindingConfig <a name="IamProjectsPolicyBindingConfig" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_projects_policy_binding.IamProjectsPolicyBindingConfig;

IamProjectsPolicyBindingConfig.builder()
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
    .location(java.lang.String)
    .policy(java.lang.String)
    .policyBindingId(java.lang.String)
    .target(IamProjectsPolicyBindingTarget)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .condition(IamProjectsPolicyBindingCondition)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .policyKind(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(IamProjectsPolicyBindingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the Policy Binding. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policy">policy</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policyBindingId">policyBindingId</a></code> | <code>java.lang.String</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#id IamProjectsPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policyKind">policyKind</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#project IamProjectsPolicyBinding#project}. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#location IamProjectsPolicyBinding#location}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#policy IamProjectsPolicyBinding#policy}

---

##### `policyBindingId`<sup>Required</sup> <a name="policyBindingId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policyBindingId"></a>

```java
public java.lang.String getPolicyBindingId();
```

- *Type:* java.lang.String

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#policy_binding_id IamProjectsPolicyBinding#policy_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.target"></a>

```java
public IamProjectsPolicyBindingTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#target IamProjectsPolicyBinding#target}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#annotations IamProjectsPolicyBinding#annotations}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.condition"></a>

```java
public IamProjectsPolicyBindingCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#condition IamProjectsPolicyBinding#condition}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#display_name IamProjectsPolicyBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#id IamProjectsPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyKind`<sup>Optional</sup> <a name="policyKind" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policyKind"></a>

```java
public java.lang.String getPolicyKind();
```

- *Type:* java.lang.String

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#policy_kind IamProjectsPolicyBinding#policy_kind}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#project IamProjectsPolicyBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.timeouts"></a>

```java
public IamProjectsPolicyBindingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#timeouts IamProjectsPolicyBinding#timeouts}

---

### IamProjectsPolicyBindingTarget <a name="IamProjectsPolicyBindingTarget" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_projects_policy_binding.IamProjectsPolicyBindingTarget;

IamProjectsPolicyBindingTarget.builder()
//  .principalSet(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget.property.principalSet">principalSet</a></code> | <code>java.lang.String</code> | Required. |

---

##### `principalSet`<sup>Optional</sup> <a name="principalSet" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget.property.principalSet"></a>

```java
public java.lang.String getPrincipalSet();
```

- *Type:* java.lang.String

Required.

Immutable. Full Resource Name of the principal set used for principal access boundary policy bindings.
Examples for each one of the following supported principal set types:

* Project:

  * '//cloudresourcemanager.googleapis.com/projects/PROJECT_NUMBER'
  * '//cloudresourcemanager.googleapis.com/projects/PROJECT_ID'
* Workload Identity Pool: '//iam.googleapis.com/projects/PROJECT_NUMBER/locations/LOCATION/workloadIdentityPools/WORKLOAD_POOL_ID'
  It must be parent by the policy binding's parent (the project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#principal_set IamProjectsPolicyBinding#principal_set}

---

### IamProjectsPolicyBindingTimeouts <a name="IamProjectsPolicyBindingTimeouts" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_projects_policy_binding.IamProjectsPolicyBindingTimeouts;

IamProjectsPolicyBindingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#create IamProjectsPolicyBinding#create}. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#delete IamProjectsPolicyBinding#delete}. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#update IamProjectsPolicyBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#create IamProjectsPolicyBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#delete IamProjectsPolicyBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/iam_projects_policy_binding#update IamProjectsPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamProjectsPolicyBindingConditionOutputReference <a name="IamProjectsPolicyBindingConditionOutputReference" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_projects_policy_binding.IamProjectsPolicyBindingConditionOutputReference;

new IamProjectsPolicyBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.internalValue"></a>

```java
public IamProjectsPolicyBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a>

---


### IamProjectsPolicyBindingTargetOutputReference <a name="IamProjectsPolicyBindingTargetOutputReference" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_projects_policy_binding.IamProjectsPolicyBindingTargetOutputReference;

new IamProjectsPolicyBindingTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.resetPrincipalSet">resetPrincipalSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrincipalSet` <a name="resetPrincipalSet" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.resetPrincipalSet"></a>

```java
public void resetPrincipalSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.principalSetInput">principalSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.principalSet">principalSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalSetInput`<sup>Optional</sup> <a name="principalSetInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.principalSetInput"></a>

```java
public java.lang.String getPrincipalSetInput();
```

- *Type:* java.lang.String

---

##### `principalSet`<sup>Required</sup> <a name="principalSet" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.principalSet"></a>

```java
public java.lang.String getPrincipalSet();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.internalValue"></a>

```java
public IamProjectsPolicyBindingTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a>

---


### IamProjectsPolicyBindingTimeoutsOutputReference <a name="IamProjectsPolicyBindingTimeoutsOutputReference" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_projects_policy_binding.IamProjectsPolicyBindingTimeoutsOutputReference;

new IamProjectsPolicyBindingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a>

---



