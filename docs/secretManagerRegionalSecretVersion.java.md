# `secretManagerRegionalSecretVersion` Submodule <a name="`secretManagerRegionalSecretVersion` Submodule" id="@cdktf/provider-google.secretManagerRegionalSecretVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretManagerRegionalSecretVersion <a name="SecretManagerRegionalSecretVersion" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version google_secret_manager_regional_secret_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.secret_manager_regional_secret_version.SecretManagerRegionalSecretVersion;

SecretManagerRegionalSecretVersion.Builder.create(Construct scope, java.lang.String id)
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
    .secret(java.lang.String)
    .secretData(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .isSecretDataBase64(java.lang.Boolean)
//  .isSecretDataBase64(IResolvable)
//  .timeouts(SecretManagerRegionalSecretVersionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.secret">secret</a></code> | <code>java.lang.String</code> | Secret Manager regional secret resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.secretData">secretData</a></code> | <code>java.lang.String</code> | The secret data. Must be no larger than 64KiB. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | The deletion policy for the regional secret version. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The current state of the regional secret version. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#id SecretManagerRegionalSecretVersion#id}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.isSecretDataBase64">isSecretDataBase64</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to 'true', the secret data is expected to be base64-encoded string and would be sent as is. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts">SecretManagerRegionalSecretVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.secret"></a>

- *Type:* java.lang.String

Secret Manager regional secret resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#secret SecretManagerRegionalSecretVersion#secret}

---

##### `secretData`<sup>Required</sup> <a name="secretData" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.secretData"></a>

- *Type:* java.lang.String

The secret data. Must be no larger than 64KiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#secret_data SecretManagerRegionalSecretVersion#secret_data}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

The deletion policy for the regional secret version.

Setting 'ABANDON' allows the resource
to be abandoned rather than deleted. Setting 'DISABLE' allows the resource to be
disabled rather than deleted. Default is 'DELETE'. Possible values are:

* DELETE
* DISABLE
* ABANDON

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#deletion_policy SecretManagerRegionalSecretVersion#deletion_policy}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The current state of the regional secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#enabled SecretManagerRegionalSecretVersion#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#id SecretManagerRegionalSecretVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isSecretDataBase64`<sup>Optional</sup> <a name="isSecretDataBase64" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.isSecretDataBase64"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to 'true', the secret data is expected to be base64-encoded string and would be sent as is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#is_secret_data_base64 SecretManagerRegionalSecretVersion#is_secret_data_base64}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts">SecretManagerRegionalSecretVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#timeouts SecretManagerRegionalSecretVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetIsSecretDataBase64">resetIsSecretDataBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.putTimeouts"></a>

```java
public void putTimeouts(SecretManagerRegionalSecretVersionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts">SecretManagerRegionalSecretVersionTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetId"></a>

```java
public void resetId()
```

##### `resetIsSecretDataBase64` <a name="resetIsSecretDataBase64" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetIsSecretDataBase64"></a>

```java
public void resetIsSecretDataBase64()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecretManagerRegionalSecretVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.secret_manager_regional_secret_version.SecretManagerRegionalSecretVersion;

SecretManagerRegionalSecretVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.secret_manager_regional_secret_version.SecretManagerRegionalSecretVersion;

SecretManagerRegionalSecretVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.secret_manager_regional_secret_version.SecretManagerRegionalSecretVersion;

SecretManagerRegionalSecretVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.secret_manager_regional_secret_version.SecretManagerRegionalSecretVersion;

SecretManagerRegionalSecretVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecretManagerRegionalSecretVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SecretManagerRegionalSecretVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecretManagerRegionalSecretVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecretManagerRegionalSecretVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SecretManagerRegionalSecretVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.customerManagedEncryption">customerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList">SecretManagerRegionalSecretVersionCustomerManagedEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.destroyTime">destroyTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference">SecretManagerRegionalSecretVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.isSecretDataBase64Input">isSecretDataBase64Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.secretDataInput">secretDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts">SecretManagerRegionalSecretVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.isSecretDataBase64">isSecretDataBase64</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.secretData">secretData</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `customerManagedEncryption`<sup>Required</sup> <a name="customerManagedEncryption" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.customerManagedEncryption"></a>

```java
public SecretManagerRegionalSecretVersionCustomerManagedEncryptionList getCustomerManagedEncryption();
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList">SecretManagerRegionalSecretVersionCustomerManagedEncryptionList</a>

---

##### `destroyTime`<sup>Required</sup> <a name="destroyTime" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.destroyTime"></a>

```java
public java.lang.String getDestroyTime();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.timeouts"></a>

```java
public SecretManagerRegionalSecretVersionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference">SecretManagerRegionalSecretVersionTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isSecretDataBase64Input`<sup>Optional</sup> <a name="isSecretDataBase64Input" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.isSecretDataBase64Input"></a>

```java
public java.lang.Object getIsSecretDataBase64Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretDataInput`<sup>Optional</sup> <a name="secretDataInput" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.secretDataInput"></a>

```java
public java.lang.String getSecretDataInput();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts">SecretManagerRegionalSecretVersionTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isSecretDataBase64`<sup>Required</sup> <a name="isSecretDataBase64" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.isSecretDataBase64"></a>

```java
public java.lang.Object getIsSecretDataBase64();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `secretData`<sup>Required</sup> <a name="secretData" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.secretData"></a>

```java
public java.lang.String getSecretData();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecretManagerRegionalSecretVersionConfig <a name="SecretManagerRegionalSecretVersionConfig" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.secret_manager_regional_secret_version.SecretManagerRegionalSecretVersionConfig;

SecretManagerRegionalSecretVersionConfig.builder()
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
    .secret(java.lang.String)
    .secretData(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .isSecretDataBase64(java.lang.Boolean)
//  .isSecretDataBase64(IResolvable)
//  .timeouts(SecretManagerRegionalSecretVersionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.secret">secret</a></code> | <code>java.lang.String</code> | Secret Manager regional secret resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.secretData">secretData</a></code> | <code>java.lang.String</code> | The secret data. Must be no larger than 64KiB. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | The deletion policy for the regional secret version. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The current state of the regional secret version. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#id SecretManagerRegionalSecretVersion#id}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.isSecretDataBase64">isSecretDataBase64</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to 'true', the secret data is expected to be base64-encoded string and would be sent as is. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts">SecretManagerRegionalSecretVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

Secret Manager regional secret resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#secret SecretManagerRegionalSecretVersion#secret}

---

##### `secretData`<sup>Required</sup> <a name="secretData" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.secretData"></a>

```java
public java.lang.String getSecretData();
```

- *Type:* java.lang.String

The secret data. Must be no larger than 64KiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#secret_data SecretManagerRegionalSecretVersion#secret_data}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

The deletion policy for the regional secret version.

Setting 'ABANDON' allows the resource
to be abandoned rather than deleted. Setting 'DISABLE' allows the resource to be
disabled rather than deleted. Default is 'DELETE'. Possible values are:

* DELETE
* DISABLE
* ABANDON

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#deletion_policy SecretManagerRegionalSecretVersion#deletion_policy}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The current state of the regional secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#enabled SecretManagerRegionalSecretVersion#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#id SecretManagerRegionalSecretVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isSecretDataBase64`<sup>Optional</sup> <a name="isSecretDataBase64" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.isSecretDataBase64"></a>

```java
public java.lang.Object getIsSecretDataBase64();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to 'true', the secret data is expected to be base64-encoded string and would be sent as is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#is_secret_data_base64 SecretManagerRegionalSecretVersion#is_secret_data_base64}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.timeouts"></a>

```java
public SecretManagerRegionalSecretVersionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts">SecretManagerRegionalSecretVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#timeouts SecretManagerRegionalSecretVersion#timeouts}

---

### SecretManagerRegionalSecretVersionCustomerManagedEncryption <a name="SecretManagerRegionalSecretVersionCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.secret_manager_regional_secret_version.SecretManagerRegionalSecretVersionCustomerManagedEncryption;

SecretManagerRegionalSecretVersionCustomerManagedEncryption.builder()
    .build();
```


### SecretManagerRegionalSecretVersionTimeouts <a name="SecretManagerRegionalSecretVersionTimeouts" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.secret_manager_regional_secret_version.SecretManagerRegionalSecretVersionTimeouts;

SecretManagerRegionalSecretVersionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#create SecretManagerRegionalSecretVersion#create}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#delete SecretManagerRegionalSecretVersion#delete}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#update SecretManagerRegionalSecretVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#create SecretManagerRegionalSecretVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#delete SecretManagerRegionalSecretVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_regional_secret_version#update SecretManagerRegionalSecretVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretManagerRegionalSecretVersionCustomerManagedEncryptionList <a name="SecretManagerRegionalSecretVersionCustomerManagedEncryptionList" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.secret_manager_regional_secret_version.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList;

new SecretManagerRegionalSecretVersionCustomerManagedEncryptionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.get"></a>

```java
public SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference <a name="SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.secret_manager_regional_secret_version.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference;

new SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.kmsKeyVersionName">kmsKeyVersionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryption">SecretManagerRegionalSecretVersionCustomerManagedEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersionName`<sup>Required</sup> <a name="kmsKeyVersionName" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.kmsKeyVersionName"></a>

```java
public java.lang.String getKmsKeyVersionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```java
public SecretManagerRegionalSecretVersionCustomerManagedEncryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryption">SecretManagerRegionalSecretVersionCustomerManagedEncryption</a>

---


### SecretManagerRegionalSecretVersionTimeoutsOutputReference <a name="SecretManagerRegionalSecretVersionTimeoutsOutputReference" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.secret_manager_regional_secret_version.SecretManagerRegionalSecretVersionTimeoutsOutputReference;

new SecretManagerRegionalSecretVersionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts">SecretManagerRegionalSecretVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts">SecretManagerRegionalSecretVersionTimeouts</a>

---



