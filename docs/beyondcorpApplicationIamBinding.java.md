# `beyondcorpApplicationIamBinding` Submodule <a name="`beyondcorpApplicationIamBinding` Submodule" id="@cdktf/provider-google.beyondcorpApplicationIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpApplicationIamBinding <a name="BeyondcorpApplicationIamBinding" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding google_beyondcorp_application_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application_iam_binding.BeyondcorpApplicationIamBinding;

BeyondcorpApplicationIamBinding.Builder.create(Construct scope, java.lang.String id)
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
    .applicationId(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
    .securityGatewaysId(java.lang.String)
//  .condition(BeyondcorpApplicationIamBindingCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#application_id BeyondcorpApplicationIamBinding#application_id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#members BeyondcorpApplicationIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#role BeyondcorpApplicationIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.securityGatewaysId">securityGatewaysId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#security_gateways_id BeyondcorpApplicationIamBinding#security_gateways_id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#id BeyondcorpApplicationIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#project BeyondcorpApplicationIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#application_id BeyondcorpApplicationIamBinding#application_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#members BeyondcorpApplicationIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#role BeyondcorpApplicationIamBinding#role}.

---

##### `securityGatewaysId`<sup>Required</sup> <a name="securityGatewaysId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.securityGatewaysId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#security_gateways_id BeyondcorpApplicationIamBinding#security_gateways_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#condition BeyondcorpApplicationIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#id BeyondcorpApplicationIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#project BeyondcorpApplicationIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.putCondition"></a>

```java
public void putCondition(BeyondcorpApplicationIamBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BeyondcorpApplicationIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application_iam_binding.BeyondcorpApplicationIamBinding;

BeyondcorpApplicationIamBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application_iam_binding.BeyondcorpApplicationIamBinding;

BeyondcorpApplicationIamBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application_iam_binding.BeyondcorpApplicationIamBinding;

BeyondcorpApplicationIamBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application_iam_binding.BeyondcorpApplicationIamBinding;

BeyondcorpApplicationIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BeyondcorpApplicationIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BeyondcorpApplicationIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BeyondcorpApplicationIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BeyondcorpApplicationIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BeyondcorpApplicationIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference">BeyondcorpApplicationIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.securityGatewaysIdInput">securityGatewaysIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.securityGatewaysId">securityGatewaysId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.condition"></a>

```java
public BeyondcorpApplicationIamBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference">BeyondcorpApplicationIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.conditionInput"></a>

```java
public BeyondcorpApplicationIamBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `securityGatewaysIdInput`<sup>Optional</sup> <a name="securityGatewaysIdInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.securityGatewaysIdInput"></a>

```java
public java.lang.String getSecurityGatewaysIdInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `securityGatewaysId`<sup>Required</sup> <a name="securityGatewaysId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.securityGatewaysId"></a>

```java
public java.lang.String getSecurityGatewaysId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpApplicationIamBindingCondition <a name="BeyondcorpApplicationIamBindingCondition" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application_iam_binding.BeyondcorpApplicationIamBindingCondition;

BeyondcorpApplicationIamBindingCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#expression BeyondcorpApplicationIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#title BeyondcorpApplicationIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#description BeyondcorpApplicationIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#expression BeyondcorpApplicationIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#title BeyondcorpApplicationIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#description BeyondcorpApplicationIamBinding#description}.

---

### BeyondcorpApplicationIamBindingConfig <a name="BeyondcorpApplicationIamBindingConfig" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application_iam_binding.BeyondcorpApplicationIamBindingConfig;

BeyondcorpApplicationIamBindingConfig.builder()
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
    .applicationId(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
    .securityGatewaysId(java.lang.String)
//  .condition(BeyondcorpApplicationIamBindingCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#application_id BeyondcorpApplicationIamBinding#application_id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#members BeyondcorpApplicationIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#role BeyondcorpApplicationIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.securityGatewaysId">securityGatewaysId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#security_gateways_id BeyondcorpApplicationIamBinding#security_gateways_id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#id BeyondcorpApplicationIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#project BeyondcorpApplicationIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#application_id BeyondcorpApplicationIamBinding#application_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#members BeyondcorpApplicationIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#role BeyondcorpApplicationIamBinding#role}.

---

##### `securityGatewaysId`<sup>Required</sup> <a name="securityGatewaysId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.securityGatewaysId"></a>

```java
public java.lang.String getSecurityGatewaysId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#security_gateways_id BeyondcorpApplicationIamBinding#security_gateways_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.condition"></a>

```java
public BeyondcorpApplicationIamBindingCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#condition BeyondcorpApplicationIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#id BeyondcorpApplicationIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/beyondcorp_application_iam_binding#project BeyondcorpApplicationIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpApplicationIamBindingConditionOutputReference <a name="BeyondcorpApplicationIamBindingConditionOutputReference" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application_iam_binding.BeyondcorpApplicationIamBindingConditionOutputReference;

new BeyondcorpApplicationIamBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.internalValue"></a>

```java
public BeyondcorpApplicationIamBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a>

---



