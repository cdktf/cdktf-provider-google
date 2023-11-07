# `google_apigee_environment_iam_binding`

Refer to the Terraform Registory for docs: [`google_apigee_environment_iam_binding`](https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding).

# `apigeeEnvironmentIamBinding` Submodule <a name="`apigeeEnvironmentIamBinding` Submodule" id="@cdktf/provider-google.apigeeEnvironmentIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvironmentIamBinding <a name="ApigeeEnvironmentIamBinding" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding google_apigee_environment_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_environment_iam_binding.ApigeeEnvironmentIamBinding;

ApigeeEnvironmentIamBinding.Builder.create(Construct scope, java.lang.String id)
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
    .envId(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .orgId(java.lang.String)
    .role(java.lang.String)
//  .condition(ApigeeEnvironmentIamBindingCondition)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.envId">envId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#env_id ApigeeEnvironmentIamBinding#env_id}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#members ApigeeEnvironmentIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#org_id ApigeeEnvironmentIamBinding#org_id}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#role ApigeeEnvironmentIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition">ApigeeEnvironmentIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#id ApigeeEnvironmentIamBinding#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.envId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#env_id ApigeeEnvironmentIamBinding#env_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#members ApigeeEnvironmentIamBinding#members}.

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#org_id ApigeeEnvironmentIamBinding#org_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#role ApigeeEnvironmentIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition">ApigeeEnvironmentIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#condition ApigeeEnvironmentIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#id ApigeeEnvironmentIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.putCondition"></a>

```java
public void putCondition(ApigeeEnvironmentIamBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition">ApigeeEnvironmentIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeEnvironmentIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_environment_iam_binding.ApigeeEnvironmentIamBinding;

ApigeeEnvironmentIamBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_environment_iam_binding.ApigeeEnvironmentIamBinding;

ApigeeEnvironmentIamBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_environment_iam_binding.ApigeeEnvironmentIamBinding;

ApigeeEnvironmentIamBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_environment_iam_binding.ApigeeEnvironmentIamBinding;

ApigeeEnvironmentIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigeeEnvironmentIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApigeeEnvironmentIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigeeEnvironmentIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigeeEnvironmentIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeEnvironmentIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference">ApigeeEnvironmentIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition">ApigeeEnvironmentIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.envIdInput">envIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.envId">envId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.condition"></a>

```java
public ApigeeEnvironmentIamBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference">ApigeeEnvironmentIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.conditionInput"></a>

```java
public ApigeeEnvironmentIamBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition">ApigeeEnvironmentIamBindingCondition</a>

---

##### `envIdInput`<sup>Optional</sup> <a name="envIdInput" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.envIdInput"></a>

```java
public java.lang.String getEnvIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.envId"></a>

```java
public java.lang.String getEnvId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvironmentIamBindingCondition <a name="ApigeeEnvironmentIamBindingCondition" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_environment_iam_binding.ApigeeEnvironmentIamBindingCondition;

ApigeeEnvironmentIamBindingCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#expression ApigeeEnvironmentIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#title ApigeeEnvironmentIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#description ApigeeEnvironmentIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#expression ApigeeEnvironmentIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#title ApigeeEnvironmentIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#description ApigeeEnvironmentIamBinding#description}.

---

### ApigeeEnvironmentIamBindingConfig <a name="ApigeeEnvironmentIamBindingConfig" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_environment_iam_binding.ApigeeEnvironmentIamBindingConfig;

ApigeeEnvironmentIamBindingConfig.builder()
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
    .envId(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .orgId(java.lang.String)
    .role(java.lang.String)
//  .condition(ApigeeEnvironmentIamBindingCondition)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.envId">envId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#env_id ApigeeEnvironmentIamBinding#env_id}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#members ApigeeEnvironmentIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#org_id ApigeeEnvironmentIamBinding#org_id}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#role ApigeeEnvironmentIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition">ApigeeEnvironmentIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#id ApigeeEnvironmentIamBinding#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.envId"></a>

```java
public java.lang.String getEnvId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#env_id ApigeeEnvironmentIamBinding#env_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#members ApigeeEnvironmentIamBinding#members}.

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#org_id ApigeeEnvironmentIamBinding#org_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#role ApigeeEnvironmentIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.condition"></a>

```java
public ApigeeEnvironmentIamBindingCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition">ApigeeEnvironmentIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#condition ApigeeEnvironmentIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/apigee_environment_iam_binding#id ApigeeEnvironmentIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvironmentIamBindingConditionOutputReference <a name="ApigeeEnvironmentIamBindingConditionOutputReference" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_environment_iam_binding.ApigeeEnvironmentIamBindingConditionOutputReference;

new ApigeeEnvironmentIamBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition">ApigeeEnvironmentIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.internalValue"></a>

```java
public ApigeeEnvironmentIamBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition">ApigeeEnvironmentIamBindingCondition</a>

---



