# `identityPlatformProjectDefaultConfig` Submodule <a name="`identityPlatformProjectDefaultConfig` Submodule" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformProjectDefaultConfig <a name="IdentityPlatformProjectDefaultConfig" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config google_identity_platform_project_default_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_project_default_config.IdentityPlatformProjectDefaultConfig;

IdentityPlatformProjectDefaultConfig.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .signIn(IdentityPlatformProjectDefaultConfigSignIn)
//  .timeouts(IdentityPlatformProjectDefaultConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#id IdentityPlatformProjectDefaultConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#project IdentityPlatformProjectDefaultConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.signIn">signIn</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#id IdentityPlatformProjectDefaultConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#project IdentityPlatformProjectDefaultConfig#project}.

---

##### `signIn`<sup>Optional</sup> <a name="signIn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.signIn"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#sign_in IdentityPlatformProjectDefaultConfig#sign_in}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#timeouts IdentityPlatformProjectDefaultConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putSignIn">putSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetSignIn">resetSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSignIn` <a name="putSignIn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putSignIn"></a>

```java
public void putSignIn(IdentityPlatformProjectDefaultConfigSignIn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putSignIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putTimeouts"></a>

```java
public void putTimeouts(IdentityPlatformProjectDefaultConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetSignIn` <a name="resetSignIn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetSignIn"></a>

```java
public void resetSignIn()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityPlatformProjectDefaultConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_project_default_config.IdentityPlatformProjectDefaultConfig;

IdentityPlatformProjectDefaultConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_project_default_config.IdentityPlatformProjectDefaultConfig;

IdentityPlatformProjectDefaultConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_project_default_config.IdentityPlatformProjectDefaultConfig;

IdentityPlatformProjectDefaultConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_project_default_config.IdentityPlatformProjectDefaultConfig;

IdentityPlatformProjectDefaultConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityPlatformProjectDefaultConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdentityPlatformProjectDefaultConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityPlatformProjectDefaultConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityPlatformProjectDefaultConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdentityPlatformProjectDefaultConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.signIn">signIn</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference">IdentityPlatformProjectDefaultConfigSignInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference">IdentityPlatformProjectDefaultConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.signInInput">signInInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `signIn`<sup>Required</sup> <a name="signIn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.signIn"></a>

```java
public IdentityPlatformProjectDefaultConfigSignInOutputReference getSignIn();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference">IdentityPlatformProjectDefaultConfigSignInOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.timeouts"></a>

```java
public IdentityPlatformProjectDefaultConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference">IdentityPlatformProjectDefaultConfigTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `signInInput`<sup>Optional</sup> <a name="signInInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.signInInput"></a>

```java
public IdentityPlatformProjectDefaultConfigSignIn getSignInInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformProjectDefaultConfigConfig <a name="IdentityPlatformProjectDefaultConfigConfig" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_project_default_config.IdentityPlatformProjectDefaultConfigConfig;

IdentityPlatformProjectDefaultConfigConfig.builder()
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
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .signIn(IdentityPlatformProjectDefaultConfigSignIn)
//  .timeouts(IdentityPlatformProjectDefaultConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#id IdentityPlatformProjectDefaultConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#project IdentityPlatformProjectDefaultConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.signIn">signIn</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#id IdentityPlatformProjectDefaultConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#project IdentityPlatformProjectDefaultConfig#project}.

---

##### `signIn`<sup>Optional</sup> <a name="signIn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.signIn"></a>

```java
public IdentityPlatformProjectDefaultConfigSignIn getSignIn();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#sign_in IdentityPlatformProjectDefaultConfig#sign_in}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.timeouts"></a>

```java
public IdentityPlatformProjectDefaultConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#timeouts IdentityPlatformProjectDefaultConfig#timeouts}

---

### IdentityPlatformProjectDefaultConfigSignIn <a name="IdentityPlatformProjectDefaultConfigSignIn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_project_default_config.IdentityPlatformProjectDefaultConfigSignIn;

IdentityPlatformProjectDefaultConfigSignIn.builder()
//  .allowDuplicateEmails(java.lang.Boolean)
//  .allowDuplicateEmails(IResolvable)
//  .anonymous(IdentityPlatformProjectDefaultConfigSignInAnonymous)
//  .email(IdentityPlatformProjectDefaultConfigSignInEmail)
//  .phoneNumber(IdentityPlatformProjectDefaultConfigSignInPhoneNumber)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.allowDuplicateEmails">allowDuplicateEmails</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow more than one account to have the same email. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.anonymous">anonymous</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | anonymous block. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.email">email</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a></code> | email block. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.phoneNumber">phoneNumber</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | phone_number block. |

---

##### `allowDuplicateEmails`<sup>Optional</sup> <a name="allowDuplicateEmails" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.allowDuplicateEmails"></a>

```java
public java.lang.Object getAllowDuplicateEmails();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow more than one account to have the same email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#allow_duplicate_emails IdentityPlatformProjectDefaultConfig#allow_duplicate_emails}

---

##### `anonymous`<sup>Optional</sup> <a name="anonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.anonymous"></a>

```java
public IdentityPlatformProjectDefaultConfigSignInAnonymous getAnonymous();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a>

anonymous block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#anonymous IdentityPlatformProjectDefaultConfig#anonymous}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.email"></a>

```java
public IdentityPlatformProjectDefaultConfigSignInEmail getEmail();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#email IdentityPlatformProjectDefaultConfig#email}

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.phoneNumber"></a>

```java
public IdentityPlatformProjectDefaultConfigSignInPhoneNumber getPhoneNumber();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

phone_number block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#phone_number IdentityPlatformProjectDefaultConfig#phone_number}

---

### IdentityPlatformProjectDefaultConfigSignInAnonymous <a name="IdentityPlatformProjectDefaultConfigSignInAnonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_project_default_config.IdentityPlatformProjectDefaultConfigSignInAnonymous;

IdentityPlatformProjectDefaultConfigSignInAnonymous.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether anonymous user auth is enabled for the project or not. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether anonymous user auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#enabled IdentityPlatformProjectDefaultConfig#enabled}

---

### IdentityPlatformProjectDefaultConfigSignInEmail <a name="IdentityPlatformProjectDefaultConfigSignInEmail" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_project_default_config.IdentityPlatformProjectDefaultConfigSignInEmail;

IdentityPlatformProjectDefaultConfigSignInEmail.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .passwordRequired(java.lang.Boolean)
//  .passwordRequired(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether email auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail.property.passwordRequired">passwordRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether a password is required for email auth or not. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether email auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#enabled IdentityPlatformProjectDefaultConfig#enabled}

---

##### `passwordRequired`<sup>Optional</sup> <a name="passwordRequired" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail.property.passwordRequired"></a>

```java
public java.lang.Object getPasswordRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether a password is required for email auth or not.

If true, both an email and
password must be provided to sign in. If false, a user may sign in via either
email/password or email link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#password_required IdentityPlatformProjectDefaultConfig#password_required}

---

### IdentityPlatformProjectDefaultConfigSignInHashConfig <a name="IdentityPlatformProjectDefaultConfigSignInHashConfig" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_project_default_config.IdentityPlatformProjectDefaultConfigSignInHashConfig;

IdentityPlatformProjectDefaultConfigSignInHashConfig.builder()
    .build();
```


### IdentityPlatformProjectDefaultConfigSignInPhoneNumber <a name="IdentityPlatformProjectDefaultConfigSignInPhoneNumber" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_project_default_config.IdentityPlatformProjectDefaultConfigSignInPhoneNumber;

IdentityPlatformProjectDefaultConfigSignInPhoneNumber.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .testPhoneNumbers(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether phone number auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.testPhoneNumbers">testPhoneNumbers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of <test phone number, fake code> that can be used for phone auth testing. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether phone number auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#enabled IdentityPlatformProjectDefaultConfig#enabled}

---

##### `testPhoneNumbers`<sup>Optional</sup> <a name="testPhoneNumbers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.testPhoneNumbers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTestPhoneNumbers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of <test phone number, fake code> that can be used for phone auth testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#test_phone_numbers IdentityPlatformProjectDefaultConfig#test_phone_numbers}

---

### IdentityPlatformProjectDefaultConfigTimeouts <a name="IdentityPlatformProjectDefaultConfigTimeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_project_default_config.IdentityPlatformProjectDefaultConfigTimeouts;

IdentityPlatformProjectDefaultConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#create IdentityPlatformProjectDefaultConfig#create}. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#delete IdentityPlatformProjectDefaultConfig#delete}. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#update IdentityPlatformProjectDefaultConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#create IdentityPlatformProjectDefaultConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#delete IdentityPlatformProjectDefaultConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/identity_platform_project_default_config#update IdentityPlatformProjectDefaultConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference <a name="IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_project_default_config.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference;

new IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.internalValue"></a>

```java
public IdentityPlatformProjectDefaultConfigSignInAnonymous getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a>

---


### IdentityPlatformProjectDefaultConfigSignInEmailOutputReference <a name="IdentityPlatformProjectDefaultConfigSignInEmailOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_project_default_config.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference;

new IdentityPlatformProjectDefaultConfigSignInEmailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetPasswordRequired">resetPasswordRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetPasswordRequired` <a name="resetPasswordRequired" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetPasswordRequired"></a>

```java
public void resetPasswordRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequiredInput">passwordRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequired">passwordRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordRequiredInput`<sup>Optional</sup> <a name="passwordRequiredInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequiredInput"></a>

```java
public java.lang.Object getPasswordRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordRequired`<sup>Required</sup> <a name="passwordRequired" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequired"></a>

```java
public java.lang.Object getPasswordRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.internalValue"></a>

```java
public IdentityPlatformProjectDefaultConfigSignInEmail getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a>

---


### IdentityPlatformProjectDefaultConfigSignInHashConfigList <a name="IdentityPlatformProjectDefaultConfigSignInHashConfigList" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_project_default_config.IdentityPlatformProjectDefaultConfigSignInHashConfigList;

new IdentityPlatformProjectDefaultConfigSignInHashConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.get"></a>

```java
public IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference <a name="IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_project_default_config.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference;

new IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.memoryCost">memoryCost</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.rounds">rounds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.saltSeparator">saltSeparator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.signerKey">signerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfig">IdentityPlatformProjectDefaultConfigSignInHashConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `memoryCost`<sup>Required</sup> <a name="memoryCost" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.memoryCost"></a>

```java
public java.lang.Number getMemoryCost();
```

- *Type:* java.lang.Number

---

##### `rounds`<sup>Required</sup> <a name="rounds" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.rounds"></a>

```java
public java.lang.Number getRounds();
```

- *Type:* java.lang.Number

---

##### `saltSeparator`<sup>Required</sup> <a name="saltSeparator" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.saltSeparator"></a>

```java
public java.lang.String getSaltSeparator();
```

- *Type:* java.lang.String

---

##### `signerKey`<sup>Required</sup> <a name="signerKey" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.signerKey"></a>

```java
public java.lang.String getSignerKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.internalValue"></a>

```java
public IdentityPlatformProjectDefaultConfigSignInHashConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfig">IdentityPlatformProjectDefaultConfigSignInHashConfig</a>

---


### IdentityPlatformProjectDefaultConfigSignInOutputReference <a name="IdentityPlatformProjectDefaultConfigSignInOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_project_default_config.IdentityPlatformProjectDefaultConfigSignInOutputReference;

new IdentityPlatformProjectDefaultConfigSignInOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous">putAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail">putEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber">putPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetAllowDuplicateEmails">resetAllowDuplicateEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetAnonymous">resetAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnonymous` <a name="putAnonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous"></a>

```java
public void putAnonymous(IdentityPlatformProjectDefaultConfigSignInAnonymous value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a>

---

##### `putEmail` <a name="putEmail" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail"></a>

```java
public void putEmail(IdentityPlatformProjectDefaultConfigSignInEmail value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a>

---

##### `putPhoneNumber` <a name="putPhoneNumber" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber"></a>

```java
public void putPhoneNumber(IdentityPlatformProjectDefaultConfigSignInPhoneNumber value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

---

##### `resetAllowDuplicateEmails` <a name="resetAllowDuplicateEmails" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetAllowDuplicateEmails"></a>

```java
public void resetAllowDuplicateEmails()
```

##### `resetAnonymous` <a name="resetAnonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetAnonymous"></a>

```java
public void resetAnonymous()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymous">anonymous</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference">IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.email">email</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference">IdentityPlatformProjectDefaultConfigSignInEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.hashConfig">hashConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList">IdentityPlatformProjectDefaultConfigSignInHashConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumber">phoneNumber</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference">IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmailsInput">allowDuplicateEmailsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymousInput">anonymousInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.emailInput">emailInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmails">allowDuplicateEmails</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `anonymous`<sup>Required</sup> <a name="anonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymous"></a>

```java
public IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference getAnonymous();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference">IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference</a>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.email"></a>

```java
public IdentityPlatformProjectDefaultConfigSignInEmailOutputReference getEmail();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference">IdentityPlatformProjectDefaultConfigSignInEmailOutputReference</a>

---

##### `hashConfig`<sup>Required</sup> <a name="hashConfig" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.hashConfig"></a>

```java
public IdentityPlatformProjectDefaultConfigSignInHashConfigList getHashConfig();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList">IdentityPlatformProjectDefaultConfigSignInHashConfigList</a>

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumber"></a>

```java
public IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference getPhoneNumber();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference">IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference</a>

---

##### `allowDuplicateEmailsInput`<sup>Optional</sup> <a name="allowDuplicateEmailsInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmailsInput"></a>

```java
public java.lang.Object getAllowDuplicateEmailsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `anonymousInput`<sup>Optional</sup> <a name="anonymousInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymousInput"></a>

```java
public IdentityPlatformProjectDefaultConfigSignInAnonymous getAnonymousInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.emailInput"></a>

```java
public IdentityPlatformProjectDefaultConfigSignInEmail getEmailInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a>

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumberInput"></a>

```java
public IdentityPlatformProjectDefaultConfigSignInPhoneNumber getPhoneNumberInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

---

##### `allowDuplicateEmails`<sup>Required</sup> <a name="allowDuplicateEmails" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmails"></a>

```java
public java.lang.Object getAllowDuplicateEmails();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.internalValue"></a>

```java
public IdentityPlatformProjectDefaultConfigSignIn getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a>

---


### IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference <a name="IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_project_default_config.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference;

new IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers">resetTestPhoneNumbers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetTestPhoneNumbers` <a name="resetTestPhoneNumbers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers"></a>

```java
public void resetTestPhoneNumbers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput">testPhoneNumbersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers">testPhoneNumbers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `testPhoneNumbersInput`<sup>Optional</sup> <a name="testPhoneNumbersInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTestPhoneNumbersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `testPhoneNumbers`<sup>Required</sup> <a name="testPhoneNumbers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTestPhoneNumbers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.internalValue"></a>

```java
public IdentityPlatformProjectDefaultConfigSignInPhoneNumber getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

---


### IdentityPlatformProjectDefaultConfigTimeoutsOutputReference <a name="IdentityPlatformProjectDefaultConfigTimeoutsOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_project_default_config.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference;

new IdentityPlatformProjectDefaultConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a>

---



