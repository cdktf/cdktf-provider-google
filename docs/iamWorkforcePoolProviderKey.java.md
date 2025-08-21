# `iamWorkforcePoolProviderKey` Submodule <a name="`iamWorkforcePoolProviderKey` Submodule" id="@cdktf/provider-google.iamWorkforcePoolProviderKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkforcePoolProviderKey <a name="IamWorkforcePoolProviderKey" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key google_iam_workforce_pool_provider_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider_key.IamWorkforcePoolProviderKey;

IamWorkforcePoolProviderKey.Builder.create(Construct scope, java.lang.String id)
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
    .keyData(IamWorkforcePoolProviderKeyKeyData)
    .keyId(java.lang.String)
    .location(java.lang.String)
    .providerId(java.lang.String)
    .use(java.lang.String)
    .workforcePoolId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(IamWorkforcePoolProviderKeyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.keyData">keyData</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a></code> | key_data block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.keyId">keyId</a></code> | <code>java.lang.String</code> | The ID to use for the key, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.providerId">providerId</a></code> | <code>java.lang.String</code> | The ID of the provider. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.use">use</a></code> | <code>java.lang.String</code> | The purpose of the key. Possible values: ["ENCRYPTION"]. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.workforcePoolId">workforcePoolId</a></code> | <code>java.lang.String</code> | The ID of the workforce pool. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#id IamWorkforcePoolProviderKey#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts">IamWorkforcePoolProviderKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyData`<sup>Required</sup> <a name="keyData" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.keyData"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a>

key_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#key_data IamWorkforcePoolProviderKey#key_data}

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.keyId"></a>

- *Type:* java.lang.String

The ID to use for the key, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#key_id IamWorkforcePoolProviderKey#key_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#location IamWorkforcePoolProviderKey#location}

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.providerId"></a>

- *Type:* java.lang.String

The ID of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#provider_id IamWorkforcePoolProviderKey#provider_id}

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.use"></a>

- *Type:* java.lang.String

The purpose of the key. Possible values: ["ENCRYPTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#use IamWorkforcePoolProviderKey#use}

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.workforcePoolId"></a>

- *Type:* java.lang.String

The ID of the workforce pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#workforce_pool_id IamWorkforcePoolProviderKey#workforce_pool_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#id IamWorkforcePoolProviderKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts">IamWorkforcePoolProviderKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#timeouts IamWorkforcePoolProviderKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.putKeyData">putKeyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKeyData` <a name="putKeyData" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.putKeyData"></a>

```java
public void putKeyData(IamWorkforcePoolProviderKeyKeyData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.putKeyData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.putTimeouts"></a>

```java
public void putTimeouts(IamWorkforcePoolProviderKeyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts">IamWorkforcePoolProviderKeyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamWorkforcePoolProviderKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider_key.IamWorkforcePoolProviderKey;

IamWorkforcePoolProviderKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider_key.IamWorkforcePoolProviderKey;

IamWorkforcePoolProviderKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider_key.IamWorkforcePoolProviderKey;

IamWorkforcePoolProviderKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider_key.IamWorkforcePoolProviderKey;

IamWorkforcePoolProviderKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IamWorkforcePoolProviderKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IamWorkforcePoolProviderKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IamWorkforcePoolProviderKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IamWorkforcePoolProviderKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IamWorkforcePoolProviderKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyData">keyData</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference">IamWorkforcePoolProviderKeyKeyDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference">IamWorkforcePoolProviderKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyDataInput">keyDataInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.providerIdInput">providerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts">IamWorkforcePoolProviderKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.useInput">useInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.workforcePoolIdInput">workforcePoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.providerId">providerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.use">use</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.workforcePoolId">workforcePoolId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `keyData`<sup>Required</sup> <a name="keyData" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyData"></a>

```java
public IamWorkforcePoolProviderKeyKeyDataOutputReference getKeyData();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference">IamWorkforcePoolProviderKeyKeyDataOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.timeouts"></a>

```java
public IamWorkforcePoolProviderKeyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference">IamWorkforcePoolProviderKeyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyDataInput`<sup>Optional</sup> <a name="keyDataInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyDataInput"></a>

```java
public IamWorkforcePoolProviderKeyKeyData getKeyDataInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a>

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `providerIdInput`<sup>Optional</sup> <a name="providerIdInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.providerIdInput"></a>

```java
public java.lang.String getProviderIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts">IamWorkforcePoolProviderKeyTimeouts</a>

---

##### `useInput`<sup>Optional</sup> <a name="useInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.useInput"></a>

```java
public java.lang.String getUseInput();
```

- *Type:* java.lang.String

---

##### `workforcePoolIdInput`<sup>Optional</sup> <a name="workforcePoolIdInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.workforcePoolIdInput"></a>

```java
public java.lang.String getWorkforcePoolIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.providerId"></a>

```java
public java.lang.String getProviderId();
```

- *Type:* java.lang.String

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.use"></a>

```java
public java.lang.String getUse();
```

- *Type:* java.lang.String

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.workforcePoolId"></a>

```java
public java.lang.String getWorkforcePoolId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkforcePoolProviderKeyConfig <a name="IamWorkforcePoolProviderKeyConfig" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider_key.IamWorkforcePoolProviderKeyConfig;

IamWorkforcePoolProviderKeyConfig.builder()
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
    .keyData(IamWorkforcePoolProviderKeyKeyData)
    .keyId(java.lang.String)
    .location(java.lang.String)
    .providerId(java.lang.String)
    .use(java.lang.String)
    .workforcePoolId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(IamWorkforcePoolProviderKeyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.keyData">keyData</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a></code> | key_data block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.keyId">keyId</a></code> | <code>java.lang.String</code> | The ID to use for the key, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.providerId">providerId</a></code> | <code>java.lang.String</code> | The ID of the provider. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.use">use</a></code> | <code>java.lang.String</code> | The purpose of the key. Possible values: ["ENCRYPTION"]. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.workforcePoolId">workforcePoolId</a></code> | <code>java.lang.String</code> | The ID of the workforce pool. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#id IamWorkforcePoolProviderKey#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts">IamWorkforcePoolProviderKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyData`<sup>Required</sup> <a name="keyData" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.keyData"></a>

```java
public IamWorkforcePoolProviderKeyKeyData getKeyData();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a>

key_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#key_data IamWorkforcePoolProviderKey#key_data}

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

The ID to use for the key, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#key_id IamWorkforcePoolProviderKey#key_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#location IamWorkforcePoolProviderKey#location}

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.providerId"></a>

```java
public java.lang.String getProviderId();
```

- *Type:* java.lang.String

The ID of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#provider_id IamWorkforcePoolProviderKey#provider_id}

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.use"></a>

```java
public java.lang.String getUse();
```

- *Type:* java.lang.String

The purpose of the key. Possible values: ["ENCRYPTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#use IamWorkforcePoolProviderKey#use}

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.workforcePoolId"></a>

```java
public java.lang.String getWorkforcePoolId();
```

- *Type:* java.lang.String

The ID of the workforce pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#workforce_pool_id IamWorkforcePoolProviderKey#workforce_pool_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#id IamWorkforcePoolProviderKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.timeouts"></a>

```java
public IamWorkforcePoolProviderKeyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts">IamWorkforcePoolProviderKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#timeouts IamWorkforcePoolProviderKey#timeouts}

---

### IamWorkforcePoolProviderKeyKeyData <a name="IamWorkforcePoolProviderKeyKeyData" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider_key.IamWorkforcePoolProviderKeyKeyData;

IamWorkforcePoolProviderKeyKeyData.builder()
    .keySpec(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData.property.keySpec">keySpec</a></code> | <code>java.lang.String</code> | The specifications for the key. Possible values: ["RSA_2048", "RSA_3072", "RSA_4096"]. |

---

##### `keySpec`<sup>Required</sup> <a name="keySpec" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData.property.keySpec"></a>

```java
public java.lang.String getKeySpec();
```

- *Type:* java.lang.String

The specifications for the key. Possible values: ["RSA_2048", "RSA_3072", "RSA_4096"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#key_spec IamWorkforcePoolProviderKey#key_spec}

---

### IamWorkforcePoolProviderKeyTimeouts <a name="IamWorkforcePoolProviderKeyTimeouts" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider_key.IamWorkforcePoolProviderKeyTimeouts;

IamWorkforcePoolProviderKeyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#create IamWorkforcePoolProviderKey#create}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#delete IamWorkforcePoolProviderKey#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#create IamWorkforcePoolProviderKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_provider_key#delete IamWorkforcePoolProviderKey#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkforcePoolProviderKeyKeyDataOutputReference <a name="IamWorkforcePoolProviderKeyKeyDataOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider_key.IamWorkforcePoolProviderKeyKeyDataOutputReference;

new IamWorkforcePoolProviderKeyKeyDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.notAfterTime">notAfterTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.notBeforeTime">notBeforeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpecInput">keySpecInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpec">keySpec</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `notAfterTime`<sup>Required</sup> <a name="notAfterTime" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.notAfterTime"></a>

```java
public java.lang.String getNotAfterTime();
```

- *Type:* java.lang.String

---

##### `notBeforeTime`<sup>Required</sup> <a name="notBeforeTime" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.notBeforeTime"></a>

```java
public java.lang.String getNotBeforeTime();
```

- *Type:* java.lang.String

---

##### `keySpecInput`<sup>Optional</sup> <a name="keySpecInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpecInput"></a>

```java
public java.lang.String getKeySpecInput();
```

- *Type:* java.lang.String

---

##### `keySpec`<sup>Required</sup> <a name="keySpec" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpec"></a>

```java
public java.lang.String getKeySpec();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.internalValue"></a>

```java
public IamWorkforcePoolProviderKeyKeyData getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a>

---


### IamWorkforcePoolProviderKeyTimeoutsOutputReference <a name="IamWorkforcePoolProviderKeyTimeoutsOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_workforce_pool_provider_key.IamWorkforcePoolProviderKeyTimeoutsOutputReference;

new IamWorkforcePoolProviderKeyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts">IamWorkforcePoolProviderKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts">IamWorkforcePoolProviderKeyTimeouts</a>

---



