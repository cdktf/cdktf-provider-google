# `storageAnywhereCache` Submodule <a name="`storageAnywhereCache` Submodule" id="@cdktf/provider-google.storageAnywhereCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAnywhereCache <a name="StorageAnywhereCache" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache google_storage_anywhere_cache}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_anywhere_cache.StorageAnywhereCache;

StorageAnywhereCache.Builder.create(Construct scope, java.lang.String id)
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
    .bucket(java.lang.String)
    .zone(java.lang.String)
//  .admissionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(StorageAnywhereCacheTimeouts)
//  .ttl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | A reference to Bucket resource. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | The zone in which the cache instance needs to be created. For example, 'us-central1-a.'. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.admissionPolicy">admissionPolicy</a></code> | <code>java.lang.String</code> | The cache admission policy dictates whether a block should be inserted upon a cache miss. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#id StorageAnywhereCache#id}. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts">StorageAnywhereCacheTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | The TTL of all cache entries in whole seconds. e.g., "7200s". It defaults to '86400s'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

A reference to Bucket resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#bucket StorageAnywhereCache#bucket}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

The zone in which the cache instance needs to be created. For example, 'us-central1-a.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#zone StorageAnywhereCache#zone}

---

##### `admissionPolicy`<sup>Optional</sup> <a name="admissionPolicy" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.admissionPolicy"></a>

- *Type:* java.lang.String

The cache admission policy dictates whether a block should be inserted upon a cache miss.

Default value: "admit-on-first-miss" Possible values: ["admit-on-first-miss", "admit-on-second-miss"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#admission_policy StorageAnywhereCache#admission_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#id StorageAnywhereCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts">StorageAnywhereCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#timeouts StorageAnywhereCache#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

The TTL of all cache entries in whole seconds. e.g., "7200s". It defaults to '86400s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#ttl StorageAnywhereCache#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.resetAdmissionPolicy">resetAdmissionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.putTimeouts"></a>

```java
public void putTimeouts(StorageAnywhereCacheTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts">StorageAnywhereCacheTimeouts</a>

---

##### `resetAdmissionPolicy` <a name="resetAdmissionPolicy" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.resetAdmissionPolicy"></a>

```java
public void resetAdmissionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageAnywhereCache resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_anywhere_cache.StorageAnywhereCache;

StorageAnywhereCache.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_anywhere_cache.StorageAnywhereCache;

StorageAnywhereCache.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_anywhere_cache.StorageAnywhereCache;

StorageAnywhereCache.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_anywhere_cache.StorageAnywhereCache;

StorageAnywhereCache.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StorageAnywhereCache.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StorageAnywhereCache resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StorageAnywhereCache to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StorageAnywhereCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StorageAnywhereCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.anywhereCacheId">anywhereCacheId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.pendingUpdate">pendingUpdate</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference">StorageAnywhereCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.admissionPolicyInput">admissionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts">StorageAnywhereCacheTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.admissionPolicy">admissionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `anywhereCacheId`<sup>Required</sup> <a name="anywhereCacheId" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.anywhereCacheId"></a>

```java
public java.lang.String getAnywhereCacheId();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `pendingUpdate`<sup>Required</sup> <a name="pendingUpdate" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.pendingUpdate"></a>

```java
public IResolvable getPendingUpdate();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.timeouts"></a>

```java
public StorageAnywhereCacheTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference">StorageAnywhereCacheTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `admissionPolicyInput`<sup>Optional</sup> <a name="admissionPolicyInput" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.admissionPolicyInput"></a>

```java
public java.lang.String getAdmissionPolicyInput();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts">StorageAnywhereCacheTimeouts</a>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `admissionPolicy`<sup>Required</sup> <a name="admissionPolicy" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.admissionPolicy"></a>

```java
public java.lang.String getAdmissionPolicy();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCache.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAnywhereCacheConfig <a name="StorageAnywhereCacheConfig" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_anywhere_cache.StorageAnywhereCacheConfig;

StorageAnywhereCacheConfig.builder()
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
    .bucket(java.lang.String)
    .zone(java.lang.String)
//  .admissionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(StorageAnywhereCacheTimeouts)
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | A reference to Bucket resource. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | The zone in which the cache instance needs to be created. For example, 'us-central1-a.'. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.admissionPolicy">admissionPolicy</a></code> | <code>java.lang.String</code> | The cache admission policy dictates whether a block should be inserted upon a cache miss. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#id StorageAnywhereCache#id}. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts">StorageAnywhereCacheTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | The TTL of all cache entries in whole seconds. e.g., "7200s". It defaults to '86400s'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

A reference to Bucket resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#bucket StorageAnywhereCache#bucket}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

The zone in which the cache instance needs to be created. For example, 'us-central1-a.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#zone StorageAnywhereCache#zone}

---

##### `admissionPolicy`<sup>Optional</sup> <a name="admissionPolicy" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.admissionPolicy"></a>

```java
public java.lang.String getAdmissionPolicy();
```

- *Type:* java.lang.String

The cache admission policy dictates whether a block should be inserted upon a cache miss.

Default value: "admit-on-first-miss" Possible values: ["admit-on-first-miss", "admit-on-second-miss"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#admission_policy StorageAnywhereCache#admission_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#id StorageAnywhereCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.timeouts"></a>

```java
public StorageAnywhereCacheTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts">StorageAnywhereCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#timeouts StorageAnywhereCache#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

The TTL of all cache entries in whole seconds. e.g., "7200s". It defaults to '86400s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#ttl StorageAnywhereCache#ttl}

---

### StorageAnywhereCacheTimeouts <a name="StorageAnywhereCacheTimeouts" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_anywhere_cache.StorageAnywhereCacheTimeouts;

StorageAnywhereCacheTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#create StorageAnywhereCache#create}. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#delete StorageAnywhereCache#delete}. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#update StorageAnywhereCache#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#create StorageAnywhereCache#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#delete StorageAnywhereCache#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/storage_anywhere_cache#update StorageAnywhereCache#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAnywhereCacheTimeoutsOutputReference <a name="StorageAnywhereCacheTimeoutsOutputReference" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_anywhere_cache.StorageAnywhereCacheTimeoutsOutputReference;

new StorageAnywhereCacheTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts">StorageAnywhereCacheTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageAnywhereCache.StorageAnywhereCacheTimeouts">StorageAnywhereCacheTimeouts</a>

---



