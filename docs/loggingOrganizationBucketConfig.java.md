# `loggingOrganizationBucketConfig` Submodule <a name="`loggingOrganizationBucketConfig` Submodule" id="@cdktf/provider-google.loggingOrganizationBucketConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingOrganizationBucketConfig <a name="LoggingOrganizationBucketConfig" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config google_logging_organization_bucket_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_bucket_config.LoggingOrganizationBucketConfig;

LoggingOrganizationBucketConfig.Builder.create(Construct scope, java.lang.String id)
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
    .bucketId(java.lang.String)
    .location(java.lang.String)
    .organization(java.lang.String)
//  .cmekSettings(LoggingOrganizationBucketConfigCmekSettings)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .indexConfigs(IResolvable)
//  .indexConfigs(java.util.List<LoggingOrganizationBucketConfigIndexConfigs>)
//  .retentionDays(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.bucketId">bucketId</a></code> | <code>java.lang.String</code> | The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the bucket. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | The parent resource that contains the logging bucket. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.cmekSettings">cmekSettings</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettings">LoggingOrganizationBucketConfigCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description for this bucket. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#id LoggingOrganizationBucketConfig#id}. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.indexConfigs">indexConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigs">LoggingOrganizationBucketConfigIndexConfigs</a>></code> | index_configs block. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | Logs will be retained by default for this amount of time, after which they will automatically be deleted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketId`<sup>Required</sup> <a name="bucketId" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.bucketId"></a>

- *Type:* java.lang.String

The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#bucket_id LoggingOrganizationBucketConfig#bucket_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#location LoggingOrganizationBucketConfig#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

The parent resource that contains the logging bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#organization LoggingOrganizationBucketConfig#organization}

---

##### `cmekSettings`<sup>Optional</sup> <a name="cmekSettings" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.cmekSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettings">LoggingOrganizationBucketConfigCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#cmek_settings LoggingOrganizationBucketConfig#cmek_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#description LoggingOrganizationBucketConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#id LoggingOrganizationBucketConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexConfigs`<sup>Optional</sup> <a name="indexConfigs" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.indexConfigs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigs">LoggingOrganizationBucketConfigIndexConfigs</a>>

index_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#index_configs LoggingOrganizationBucketConfig#index_configs}

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.Initializer.parameter.retentionDays"></a>

- *Type:* java.lang.Number

Logs will be retained by default for this amount of time, after which they will automatically be deleted.

The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#retention_days LoggingOrganizationBucketConfig#retention_days}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.putCmekSettings">putCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.putIndexConfigs">putIndexConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.resetCmekSettings">resetCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.resetIndexConfigs">resetIndexConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCmekSettings` <a name="putCmekSettings" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.putCmekSettings"></a>

```java
public void putCmekSettings(LoggingOrganizationBucketConfigCmekSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.putCmekSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettings">LoggingOrganizationBucketConfigCmekSettings</a>

---

##### `putIndexConfigs` <a name="putIndexConfigs" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.putIndexConfigs"></a>

```java
public void putIndexConfigs(IResolvable OR java.util.List<LoggingOrganizationBucketConfigIndexConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.putIndexConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigs">LoggingOrganizationBucketConfigIndexConfigs</a>>

---

##### `resetCmekSettings` <a name="resetCmekSettings" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.resetCmekSettings"></a>

```java
public void resetCmekSettings()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.resetId"></a>

```java
public void resetId()
```

##### `resetIndexConfigs` <a name="resetIndexConfigs" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.resetIndexConfigs"></a>

```java
public void resetIndexConfigs()
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.resetRetentionDays"></a>

```java
public void resetRetentionDays()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoggingOrganizationBucketConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_bucket_config.LoggingOrganizationBucketConfig;

LoggingOrganizationBucketConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_bucket_config.LoggingOrganizationBucketConfig;

LoggingOrganizationBucketConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_bucket_config.LoggingOrganizationBucketConfig;

LoggingOrganizationBucketConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_bucket_config.LoggingOrganizationBucketConfig;

LoggingOrganizationBucketConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LoggingOrganizationBucketConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LoggingOrganizationBucketConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LoggingOrganizationBucketConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LoggingOrganizationBucketConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LoggingOrganizationBucketConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.cmekSettings">cmekSettings</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference">LoggingOrganizationBucketConfigCmekSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.indexConfigs">indexConfigs</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList">LoggingOrganizationBucketConfigIndexConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.bucketIdInput">bucketIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.cmekSettingsInput">cmekSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettings">LoggingOrganizationBucketConfigCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.indexConfigsInput">indexConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigs">LoggingOrganizationBucketConfigIndexConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.retentionDaysInput">retentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.bucketId">bucketId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cmekSettings`<sup>Required</sup> <a name="cmekSettings" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.cmekSettings"></a>

```java
public LoggingOrganizationBucketConfigCmekSettingsOutputReference getCmekSettings();
```

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference">LoggingOrganizationBucketConfigCmekSettingsOutputReference</a>

---

##### `indexConfigs`<sup>Required</sup> <a name="indexConfigs" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.indexConfigs"></a>

```java
public LoggingOrganizationBucketConfigIndexConfigsList getIndexConfigs();
```

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList">LoggingOrganizationBucketConfigIndexConfigsList</a>

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `bucketIdInput`<sup>Optional</sup> <a name="bucketIdInput" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.bucketIdInput"></a>

```java
public java.lang.String getBucketIdInput();
```

- *Type:* java.lang.String

---

##### `cmekSettingsInput`<sup>Optional</sup> <a name="cmekSettingsInput" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.cmekSettingsInput"></a>

```java
public LoggingOrganizationBucketConfigCmekSettings getCmekSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettings">LoggingOrganizationBucketConfigCmekSettings</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `indexConfigsInput`<sup>Optional</sup> <a name="indexConfigsInput" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.indexConfigsInput"></a>

```java
public java.lang.Object getIndexConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigs">LoggingOrganizationBucketConfigIndexConfigs</a>>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.retentionDaysInput"></a>

```java
public java.lang.Number getRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `bucketId`<sup>Required</sup> <a name="bucketId" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.bucketId"></a>

```java
public java.lang.String getBucketId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingOrganizationBucketConfigCmekSettings <a name="LoggingOrganizationBucketConfigCmekSettings" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_bucket_config.LoggingOrganizationBucketConfigCmekSettings;

LoggingOrganizationBucketConfigCmekSettings.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettings.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The resource name for the configured Cloud KMS key. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettings.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The resource name for the configured Cloud KMS key.

KMS key name format:
"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
To enable CMEK for the bucket, set this field to a valid kmsKeyName for which the associated service account has the required cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
The Cloud KMS key used by the bucket can be updated by changing the kmsKeyName to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.
See [Enabling CMEK for Logging Buckets](https://cloud.google.com/logging/docs/routing/managed-encryption-storage) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#kms_key_name LoggingOrganizationBucketConfig#kms_key_name}

---

### LoggingOrganizationBucketConfigConfig <a name="LoggingOrganizationBucketConfigConfig" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_bucket_config.LoggingOrganizationBucketConfigConfig;

LoggingOrganizationBucketConfigConfig.builder()
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
    .bucketId(java.lang.String)
    .location(java.lang.String)
    .organization(java.lang.String)
//  .cmekSettings(LoggingOrganizationBucketConfigCmekSettings)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .indexConfigs(IResolvable)
//  .indexConfigs(java.util.List<LoggingOrganizationBucketConfigIndexConfigs>)
//  .retentionDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.bucketId">bucketId</a></code> | <code>java.lang.String</code> | The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the bucket. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | The parent resource that contains the logging bucket. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.cmekSettings">cmekSettings</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettings">LoggingOrganizationBucketConfigCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description for this bucket. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#id LoggingOrganizationBucketConfig#id}. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.indexConfigs">indexConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigs">LoggingOrganizationBucketConfigIndexConfigs</a>></code> | index_configs block. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | Logs will be retained by default for this amount of time, after which they will automatically be deleted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketId`<sup>Required</sup> <a name="bucketId" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.bucketId"></a>

```java
public java.lang.String getBucketId();
```

- *Type:* java.lang.String

The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#bucket_id LoggingOrganizationBucketConfig#bucket_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#location LoggingOrganizationBucketConfig#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The parent resource that contains the logging bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#organization LoggingOrganizationBucketConfig#organization}

---

##### `cmekSettings`<sup>Optional</sup> <a name="cmekSettings" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.cmekSettings"></a>

```java
public LoggingOrganizationBucketConfigCmekSettings getCmekSettings();
```

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettings">LoggingOrganizationBucketConfigCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#cmek_settings LoggingOrganizationBucketConfig#cmek_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#description LoggingOrganizationBucketConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#id LoggingOrganizationBucketConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexConfigs`<sup>Optional</sup> <a name="indexConfigs" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.indexConfigs"></a>

```java
public java.lang.Object getIndexConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigs">LoggingOrganizationBucketConfigIndexConfigs</a>>

index_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#index_configs LoggingOrganizationBucketConfig#index_configs}

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigConfig.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

Logs will be retained by default for this amount of time, after which they will automatically be deleted.

The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#retention_days LoggingOrganizationBucketConfig#retention_days}

---

### LoggingOrganizationBucketConfigIndexConfigs <a name="LoggingOrganizationBucketConfigIndexConfigs" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_bucket_config.LoggingOrganizationBucketConfigIndexConfigs;

LoggingOrganizationBucketConfigIndexConfigs.builder()
    .fieldPath(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigs.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | The LogEntry field path to index. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigs.property.type">type</a></code> | <code>java.lang.String</code> | The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing. |

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigs.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

The LogEntry field path to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#field_path LoggingOrganizationBucketConfig#field_path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigs.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing.

See [indexing documentation](https://cloud.google.com/logging/docs/view/advanced-queries#indexed-fields) for details.
For example: jsonPayload.request.status

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/logging_organization_bucket_config#type LoggingOrganizationBucketConfig#type}

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingOrganizationBucketConfigCmekSettingsOutputReference <a name="LoggingOrganizationBucketConfigCmekSettingsOutputReference" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_bucket_config.LoggingOrganizationBucketConfigCmekSettingsOutputReference;

new LoggingOrganizationBucketConfigCmekSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName">kmsKeyVersionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettings">LoggingOrganizationBucketConfigCmekSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersionName`<sup>Required</sup> <a name="kmsKeyVersionName" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName"></a>

```java
public java.lang.String getKmsKeyVersionName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.property.serviceAccountId"></a>

```java
public java.lang.String getServiceAccountId();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettingsOutputReference.property.internalValue"></a>

```java
public LoggingOrganizationBucketConfigCmekSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigCmekSettings">LoggingOrganizationBucketConfigCmekSettings</a>

---


### LoggingOrganizationBucketConfigIndexConfigsList <a name="LoggingOrganizationBucketConfigIndexConfigsList" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_bucket_config.LoggingOrganizationBucketConfigIndexConfigsList;

new LoggingOrganizationBucketConfigIndexConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.get"></a>

```java
public LoggingOrganizationBucketConfigIndexConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigs">LoggingOrganizationBucketConfigIndexConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigs">LoggingOrganizationBucketConfigIndexConfigs</a>>

---


### LoggingOrganizationBucketConfigIndexConfigsOutputReference <a name="LoggingOrganizationBucketConfigIndexConfigsOutputReference" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_bucket_config.LoggingOrganizationBucketConfigIndexConfigsOutputReference;

new LoggingOrganizationBucketConfigIndexConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigs">LoggingOrganizationBucketConfigIndexConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.property.fieldPathInput"></a>

```java
public java.lang.String getFieldPathInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.loggingOrganizationBucketConfig.LoggingOrganizationBucketConfigIndexConfigs">LoggingOrganizationBucketConfigIndexConfigs</a>

---



