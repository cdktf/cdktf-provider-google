# `iamOrganizationsPolicyBinding` Submodule <a name="`iamOrganizationsPolicyBinding` Submodule" id="@cdktf/provider-google.iamOrganizationsPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamOrganizationsPolicyBinding <a name="IamOrganizationsPolicyBinding" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding google_iam_organizations_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_organizations_policy_binding.IamOrganizationsPolicyBinding;

IamOrganizationsPolicyBinding.Builder.create(Construct scope, java.lang.String id)
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
    .organization(java.lang.String)
    .policy(java.lang.String)
    .policyBindingId(java.lang.String)
    .target(IamOrganizationsPolicyBindingTarget)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .condition(IamOrganizationsPolicyBindingCondition)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .policyKind(java.lang.String)
//  .timeouts(IamOrganizationsPolicyBindingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the Policy Binding. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | The parent organization of the Policy Binding. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.policy">policy</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.policyBindingId">policyBindingId</a></code> | <code>java.lang.String</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#id IamOrganizationsPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.policyKind">policyKind</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#location IamOrganizationsPolicyBinding#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

The parent organization of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#organization IamOrganizationsPolicyBinding#organization}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.policy"></a>

- *Type:* java.lang.String

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#policy IamOrganizationsPolicyBinding#policy}

---

##### `policyBindingId`<sup>Required</sup> <a name="policyBindingId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.policyBindingId"></a>

- *Type:* java.lang.String

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#policy_binding_id IamOrganizationsPolicyBinding#policy_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#target IamOrganizationsPolicyBinding#target}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#annotations IamOrganizationsPolicyBinding#annotations}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#condition IamOrganizationsPolicyBinding#condition}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#display_name IamOrganizationsPolicyBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#id IamOrganizationsPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyKind`<sup>Optional</sup> <a name="policyKind" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.policyKind"></a>

- *Type:* java.lang.String

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#policy_kind IamOrganizationsPolicyBinding#policy_kind}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#timeouts IamOrganizationsPolicyBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetPolicyKind">resetPolicyKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putCondition"></a>

```java
public void putCondition(IamOrganizationsPolicyBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putTarget"></a>

```java
public void putTarget(IamOrganizationsPolicyBindingTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putTimeouts"></a>

```java
public void putTimeouts(IamOrganizationsPolicyBindingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetId"></a>

```java
public void resetId()
```

##### `resetPolicyKind` <a name="resetPolicyKind" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetPolicyKind"></a>

```java
public void resetPolicyKind()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamOrganizationsPolicyBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_organizations_policy_binding.IamOrganizationsPolicyBinding;

IamOrganizationsPolicyBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_organizations_policy_binding.IamOrganizationsPolicyBinding;

IamOrganizationsPolicyBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_organizations_policy_binding.IamOrganizationsPolicyBinding;

IamOrganizationsPolicyBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_organizations_policy_binding.IamOrganizationsPolicyBinding;

IamOrganizationsPolicyBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IamOrganizationsPolicyBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IamOrganizationsPolicyBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IamOrganizationsPolicyBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IamOrganizationsPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IamOrganizationsPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference">IamOrganizationsPolicyBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyUid">policyUid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.target">target</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference">IamOrganizationsPolicyBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference">IamOrganizationsPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyBindingIdInput">policyBindingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyKindInput">policyKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyBindingId">policyBindingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyKind">policyKind</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.condition"></a>

```java
public IamOrganizationsPolicyBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference">IamOrganizationsPolicyBindingConditionOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyUid`<sup>Required</sup> <a name="policyUid" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyUid"></a>

```java
public java.lang.String getPolicyUid();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.target"></a>

```java
public IamOrganizationsPolicyBindingTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference">IamOrganizationsPolicyBindingTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.timeouts"></a>

```java
public IamOrganizationsPolicyBindingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference">IamOrganizationsPolicyBindingTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.conditionInput"></a>

```java
public IamOrganizationsPolicyBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `policyBindingIdInput`<sup>Optional</sup> <a name="policyBindingIdInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyBindingIdInput"></a>

```java
public java.lang.String getPolicyBindingIdInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `policyKindInput`<sup>Optional</sup> <a name="policyKindInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyKindInput"></a>

```java
public java.lang.String getPolicyKindInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.targetInput"></a>

```java
public IamOrganizationsPolicyBindingTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `policyBindingId`<sup>Required</sup> <a name="policyBindingId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyBindingId"></a>

```java
public java.lang.String getPolicyBindingId();
```

- *Type:* java.lang.String

---

##### `policyKind`<sup>Required</sup> <a name="policyKind" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyKind"></a>

```java
public java.lang.String getPolicyKind();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IamOrganizationsPolicyBindingCondition <a name="IamOrganizationsPolicyBindingCondition" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_organizations_policy_binding.IamOrganizationsPolicyBindingCondition;

IamOrganizationsPolicyBindingCondition.builder()
//  .description(java.lang.String)
//  .expression(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.location">location</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#description IamOrganizationsPolicyBinding#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#expression IamOrganizationsPolicyBinding#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#location IamOrganizationsPolicyBinding#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#title IamOrganizationsPolicyBinding#title}

---

### IamOrganizationsPolicyBindingConfig <a name="IamOrganizationsPolicyBindingConfig" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_organizations_policy_binding.IamOrganizationsPolicyBindingConfig;

IamOrganizationsPolicyBindingConfig.builder()
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
    .organization(java.lang.String)
    .policy(java.lang.String)
    .policyBindingId(java.lang.String)
    .target(IamOrganizationsPolicyBindingTarget)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .condition(IamOrganizationsPolicyBindingCondition)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .policyKind(java.lang.String)
//  .timeouts(IamOrganizationsPolicyBindingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the Policy Binding. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | The parent organization of the Policy Binding. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.policy">policy</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.policyBindingId">policyBindingId</a></code> | <code>java.lang.String</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#id IamOrganizationsPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.policyKind">policyKind</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#location IamOrganizationsPolicyBinding#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The parent organization of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#organization IamOrganizationsPolicyBinding#organization}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#policy IamOrganizationsPolicyBinding#policy}

---

##### `policyBindingId`<sup>Required</sup> <a name="policyBindingId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.policyBindingId"></a>

```java
public java.lang.String getPolicyBindingId();
```

- *Type:* java.lang.String

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#policy_binding_id IamOrganizationsPolicyBinding#policy_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.target"></a>

```java
public IamOrganizationsPolicyBindingTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#target IamOrganizationsPolicyBinding#target}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#annotations IamOrganizationsPolicyBinding#annotations}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.condition"></a>

```java
public IamOrganizationsPolicyBindingCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#condition IamOrganizationsPolicyBinding#condition}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#display_name IamOrganizationsPolicyBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#id IamOrganizationsPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyKind`<sup>Optional</sup> <a name="policyKind" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.policyKind"></a>

```java
public java.lang.String getPolicyKind();
```

- *Type:* java.lang.String

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#policy_kind IamOrganizationsPolicyBinding#policy_kind}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.timeouts"></a>

```java
public IamOrganizationsPolicyBindingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#timeouts IamOrganizationsPolicyBinding#timeouts}

---

### IamOrganizationsPolicyBindingTarget <a name="IamOrganizationsPolicyBindingTarget" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_organizations_policy_binding.IamOrganizationsPolicyBindingTarget;

IamOrganizationsPolicyBindingTarget.builder()
//  .principalSet(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget.property.principalSet">principalSet</a></code> | <code>java.lang.String</code> | Required. |

---

##### `principalSet`<sup>Optional</sup> <a name="principalSet" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget.property.principalSet"></a>

```java
public java.lang.String getPrincipalSet();
```

- *Type:* java.lang.String

Required.

Immutable. Full Resource Name of the principal set used for principal access boundary policy bindings.
Examples for each one of the following supported principal set types:

* Organization '//cloudresourcemanager.googleapis.com/organizations/ORGANIZATION_ID'
* Workforce Identity: '//iam.googleapis.com/locations/global/workforcePools/WORKFORCE_POOL_ID'
* Workspace Identity: '//iam.googleapis.com/locations/global/workspace/WORKSPACE_ID'
  It must be parent by the policy binding's parent (the organization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#principal_set IamOrganizationsPolicyBinding#principal_set}

---

### IamOrganizationsPolicyBindingTimeouts <a name="IamOrganizationsPolicyBindingTimeouts" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_organizations_policy_binding.IamOrganizationsPolicyBindingTimeouts;

IamOrganizationsPolicyBindingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#create IamOrganizationsPolicyBinding#create}. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#delete IamOrganizationsPolicyBinding#delete}. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#update IamOrganizationsPolicyBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#create IamOrganizationsPolicyBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#delete IamOrganizationsPolicyBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/iam_organizations_policy_binding#update IamOrganizationsPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamOrganizationsPolicyBindingConditionOutputReference <a name="IamOrganizationsPolicyBindingConditionOutputReference" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_organizations_policy_binding.IamOrganizationsPolicyBindingConditionOutputReference;

new IamOrganizationsPolicyBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.internalValue"></a>

```java
public IamOrganizationsPolicyBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a>

---


### IamOrganizationsPolicyBindingTargetOutputReference <a name="IamOrganizationsPolicyBindingTargetOutputReference" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_organizations_policy_binding.IamOrganizationsPolicyBindingTargetOutputReference;

new IamOrganizationsPolicyBindingTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.resetPrincipalSet">resetPrincipalSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrincipalSet` <a name="resetPrincipalSet" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.resetPrincipalSet"></a>

```java
public void resetPrincipalSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.principalSetInput">principalSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.principalSet">principalSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalSetInput`<sup>Optional</sup> <a name="principalSetInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.principalSetInput"></a>

```java
public java.lang.String getPrincipalSetInput();
```

- *Type:* java.lang.String

---

##### `principalSet`<sup>Required</sup> <a name="principalSet" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.principalSet"></a>

```java
public java.lang.String getPrincipalSet();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.internalValue"></a>

```java
public IamOrganizationsPolicyBindingTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a>

---


### IamOrganizationsPolicyBindingTimeoutsOutputReference <a name="IamOrganizationsPolicyBindingTimeoutsOutputReference" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_organizations_policy_binding.IamOrganizationsPolicyBindingTimeoutsOutputReference;

new IamOrganizationsPolicyBindingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a>

---



