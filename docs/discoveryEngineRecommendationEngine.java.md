# `discoveryEngineRecommendationEngine` Submodule <a name="`discoveryEngineRecommendationEngine` Submodule" id="@cdktf/provider-google.discoveryEngineRecommendationEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineRecommendationEngine <a name="DiscoveryEngineRecommendationEngine" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine google_discovery_engine_recommendation_engine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_recommendation_engine.DiscoveryEngineRecommendationEngine;

DiscoveryEngineRecommendationEngine.Builder.create(Construct scope, java.lang.String id)
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
    .dataStoreIds(java.util.List<java.lang.String>)
    .displayName(java.lang.String)
    .engineId(java.lang.String)
    .location(java.lang.String)
//  .commonConfig(DiscoveryEngineRecommendationEngineCommonConfig)
//  .id(java.lang.String)
//  .industryVertical(java.lang.String)
//  .mediaRecommendationEngineConfig(DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig)
//  .project(java.lang.String)
//  .timeouts(DiscoveryEngineRecommendationEngineTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.dataStoreIds">dataStoreIds</a></code> | <code>java.util.List<java.lang.String></code> | The data stores associated with this engine. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.engineId">engineId</a></code> | <code>java.lang.String</code> | Unique ID to use for Recommendation Engine. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.commonConfig">commonConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#id DiscoveryEngineRecommendationEngine#id}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | The industry vertical that the engine registers. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.mediaRecommendationEngineConfig">mediaRecommendationEngineConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a></code> | media_recommendation_engine_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#project DiscoveryEngineRecommendationEngine#project}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts">DiscoveryEngineRecommendationEngineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.dataStoreIds"></a>

- *Type:* java.util.List<java.lang.String>

The data stores associated with this engine.

For SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#data_store_ids DiscoveryEngineRecommendationEngine#data_store_ids}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#display_name DiscoveryEngineRecommendationEngine#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.engineId"></a>

- *Type:* java.lang.String

Unique ID to use for Recommendation Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#engine_id DiscoveryEngineRecommendationEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#location DiscoveryEngineRecommendationEngine#location}

---

##### `commonConfig`<sup>Optional</sup> <a name="commonConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.commonConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#common_config DiscoveryEngineRecommendationEngine#common_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#id DiscoveryEngineRecommendationEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industryVertical`<sup>Optional</sup> <a name="industryVertical" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.industryVertical"></a>

- *Type:* java.lang.String

The industry vertical that the engine registers.

The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#industry_vertical DiscoveryEngineRecommendationEngine#industry_vertical}

---

##### `mediaRecommendationEngineConfig`<sup>Optional</sup> <a name="mediaRecommendationEngineConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.mediaRecommendationEngineConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

media_recommendation_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#media_recommendation_engine_config DiscoveryEngineRecommendationEngine#media_recommendation_engine_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#project DiscoveryEngineRecommendationEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts">DiscoveryEngineRecommendationEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#timeouts DiscoveryEngineRecommendationEngine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putCommonConfig">putCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putMediaRecommendationEngineConfig">putMediaRecommendationEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetCommonConfig">resetCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetIndustryVertical">resetIndustryVertical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetMediaRecommendationEngineConfig">resetMediaRecommendationEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCommonConfig` <a name="putCommonConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putCommonConfig"></a>

```java
public void putCommonConfig(DiscoveryEngineRecommendationEngineCommonConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putCommonConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a>

---

##### `putMediaRecommendationEngineConfig` <a name="putMediaRecommendationEngineConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putMediaRecommendationEngineConfig"></a>

```java
public void putMediaRecommendationEngineConfig(DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putMediaRecommendationEngineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putTimeouts"></a>

```java
public void putTimeouts(DiscoveryEngineRecommendationEngineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts">DiscoveryEngineRecommendationEngineTimeouts</a>

---

##### `resetCommonConfig` <a name="resetCommonConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetCommonConfig"></a>

```java
public void resetCommonConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetId"></a>

```java
public void resetId()
```

##### `resetIndustryVertical` <a name="resetIndustryVertical" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetIndustryVertical"></a>

```java
public void resetIndustryVertical()
```

##### `resetMediaRecommendationEngineConfig` <a name="resetMediaRecommendationEngineConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetMediaRecommendationEngineConfig"></a>

```java
public void resetMediaRecommendationEngineConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DiscoveryEngineRecommendationEngine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_recommendation_engine.DiscoveryEngineRecommendationEngine;

DiscoveryEngineRecommendationEngine.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_recommendation_engine.DiscoveryEngineRecommendationEngine;

DiscoveryEngineRecommendationEngine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_recommendation_engine.DiscoveryEngineRecommendationEngine;

DiscoveryEngineRecommendationEngine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_recommendation_engine.DiscoveryEngineRecommendationEngine;

DiscoveryEngineRecommendationEngine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DiscoveryEngineRecommendationEngine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DiscoveryEngineRecommendationEngine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DiscoveryEngineRecommendationEngine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DiscoveryEngineRecommendationEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineRecommendationEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.commonConfig">commonConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference">DiscoveryEngineRecommendationEngineCommonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.mediaRecommendationEngineConfig">mediaRecommendationEngineConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference">DiscoveryEngineRecommendationEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.commonConfigInput">commonConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.dataStoreIdsInput">dataStoreIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.engineIdInput">engineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.industryVerticalInput">industryVerticalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.mediaRecommendationEngineConfigInput">mediaRecommendationEngineConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts">DiscoveryEngineRecommendationEngineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.dataStoreIds">dataStoreIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.engineId">engineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `commonConfig`<sup>Required</sup> <a name="commonConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.commonConfig"></a>

```java
public DiscoveryEngineRecommendationEngineCommonConfigOutputReference getCommonConfig();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference">DiscoveryEngineRecommendationEngineCommonConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `mediaRecommendationEngineConfig`<sup>Required</sup> <a name="mediaRecommendationEngineConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.mediaRecommendationEngineConfig"></a>

```java
public DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference getMediaRecommendationEngineConfig();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.timeouts"></a>

```java
public DiscoveryEngineRecommendationEngineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference">DiscoveryEngineRecommendationEngineTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `commonConfigInput`<sup>Optional</sup> <a name="commonConfigInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.commonConfigInput"></a>

```java
public DiscoveryEngineRecommendationEngineCommonConfig getCommonConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a>

---

##### `dataStoreIdsInput`<sup>Optional</sup> <a name="dataStoreIdsInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.dataStoreIdsInput"></a>

```java
public java.util.List<java.lang.String> getDataStoreIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.engineIdInput"></a>

```java
public java.lang.String getEngineIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `industryVerticalInput`<sup>Optional</sup> <a name="industryVerticalInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.industryVerticalInput"></a>

```java
public java.lang.String getIndustryVerticalInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mediaRecommendationEngineConfigInput`<sup>Optional</sup> <a name="mediaRecommendationEngineConfigInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.mediaRecommendationEngineConfigInput"></a>

```java
public DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig getMediaRecommendationEngineConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts">DiscoveryEngineRecommendationEngineTimeouts</a>

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.dataStoreIds"></a>

```java
public java.util.List<java.lang.String> getDataStoreIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `industryVertical`<sup>Required</sup> <a name="industryVertical" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.industryVertical"></a>

```java
public java.lang.String getIndustryVertical();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineRecommendationEngineCommonConfig <a name="DiscoveryEngineRecommendationEngineCommonConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_recommendation_engine.DiscoveryEngineRecommendationEngineCommonConfig;

DiscoveryEngineRecommendationEngineCommonConfig.builder()
//  .companyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig.property.companyName">companyName</a></code> | <code>java.lang.String</code> | The name of the company, business or entity that is associated with the engine. |

---

##### `companyName`<sup>Optional</sup> <a name="companyName" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.cd

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#company_name DiscoveryEngineRecommendationEngine#company_name}

---

### DiscoveryEngineRecommendationEngineConfig <a name="DiscoveryEngineRecommendationEngineConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_recommendation_engine.DiscoveryEngineRecommendationEngineConfig;

DiscoveryEngineRecommendationEngineConfig.builder()
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
    .dataStoreIds(java.util.List<java.lang.String>)
    .displayName(java.lang.String)
    .engineId(java.lang.String)
    .location(java.lang.String)
//  .commonConfig(DiscoveryEngineRecommendationEngineCommonConfig)
//  .id(java.lang.String)
//  .industryVertical(java.lang.String)
//  .mediaRecommendationEngineConfig(DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig)
//  .project(java.lang.String)
//  .timeouts(DiscoveryEngineRecommendationEngineTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.dataStoreIds">dataStoreIds</a></code> | <code>java.util.List<java.lang.String></code> | The data stores associated with this engine. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.engineId">engineId</a></code> | <code>java.lang.String</code> | Unique ID to use for Recommendation Engine. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.commonConfig">commonConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#id DiscoveryEngineRecommendationEngine#id}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | The industry vertical that the engine registers. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.mediaRecommendationEngineConfig">mediaRecommendationEngineConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a></code> | media_recommendation_engine_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#project DiscoveryEngineRecommendationEngine#project}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts">DiscoveryEngineRecommendationEngineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.dataStoreIds"></a>

```java
public java.util.List<java.lang.String> getDataStoreIds();
```

- *Type:* java.util.List<java.lang.String>

The data stores associated with this engine.

For SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#data_store_ids DiscoveryEngineRecommendationEngine#data_store_ids}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#display_name DiscoveryEngineRecommendationEngine#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

Unique ID to use for Recommendation Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#engine_id DiscoveryEngineRecommendationEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#location DiscoveryEngineRecommendationEngine#location}

---

##### `commonConfig`<sup>Optional</sup> <a name="commonConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.commonConfig"></a>

```java
public DiscoveryEngineRecommendationEngineCommonConfig getCommonConfig();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#common_config DiscoveryEngineRecommendationEngine#common_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#id DiscoveryEngineRecommendationEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industryVertical`<sup>Optional</sup> <a name="industryVertical" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.industryVertical"></a>

```java
public java.lang.String getIndustryVertical();
```

- *Type:* java.lang.String

The industry vertical that the engine registers.

The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#industry_vertical DiscoveryEngineRecommendationEngine#industry_vertical}

---

##### `mediaRecommendationEngineConfig`<sup>Optional</sup> <a name="mediaRecommendationEngineConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.mediaRecommendationEngineConfig"></a>

```java
public DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig getMediaRecommendationEngineConfig();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

media_recommendation_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#media_recommendation_engine_config DiscoveryEngineRecommendationEngine#media_recommendation_engine_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#project DiscoveryEngineRecommendationEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.timeouts"></a>

```java
public DiscoveryEngineRecommendationEngineTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts">DiscoveryEngineRecommendationEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#timeouts DiscoveryEngineRecommendationEngine#timeouts}

---

### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_recommendation_engine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig;

DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.builder()
//  .engineFeaturesConfig(DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig)
//  .optimizationObjective(java.lang.String)
//  .optimizationObjectiveConfig(DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig)
//  .trainingState(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.engineFeaturesConfig">engineFeaturesConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a></code> | engine_features_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.optimizationObjective">optimizationObjective</a></code> | <code>java.lang.String</code> | The optimization objective. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.optimizationObjectiveConfig">optimizationObjectiveConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a></code> | optimization_objective_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.trainingState">trainingState</a></code> | <code>java.lang.String</code> | The training state that the engine is in (e.g. 'TRAINING' or 'PAUSED'). Since part of the cost of running the service is frequency of training - this can be used to determine when to train engine in order to control cost. If not specified: the default value for 'CreateEngine' method is 'TRAINING'. The default value for 'UpdateEngine' method is to keep the state the same as before. Possible values: ["PAUSED", "TRAINING"]. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of engine. |

---

##### `engineFeaturesConfig`<sup>Optional</sup> <a name="engineFeaturesConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.engineFeaturesConfig"></a>

```java
public DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig getEngineFeaturesConfig();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a>

engine_features_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#engine_features_config DiscoveryEngineRecommendationEngine#engine_features_config}

---

##### `optimizationObjective`<sup>Optional</sup> <a name="optimizationObjective" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.optimizationObjective"></a>

```java
public java.lang.String getOptimizationObjective();
```

- *Type:* java.lang.String

The optimization objective.

e.g., 'cvr'.
This field together with MediaRecommendationEngineConfig.type describes
engine metadata to use to control engine training and serving.
Currently supported values: 'ctr', 'cvr'.
If not specified, we choose default based on engine type. Default depends on type of recommendation:
'recommended-for-you' => 'ctr'
'others-you-may-like' => 'ctr'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#optimization_objective DiscoveryEngineRecommendationEngine#optimization_objective}

---

##### `optimizationObjectiveConfig`<sup>Optional</sup> <a name="optimizationObjectiveConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.optimizationObjectiveConfig"></a>

```java
public DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig getOptimizationObjectiveConfig();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a>

optimization_objective_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#optimization_objective_config DiscoveryEngineRecommendationEngine#optimization_objective_config}

---

##### `trainingState`<sup>Optional</sup> <a name="trainingState" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.trainingState"></a>

```java
public java.lang.String getTrainingState();
```

- *Type:* java.lang.String

The training state that the engine is in (e.g. 'TRAINING' or 'PAUSED'). Since part of the cost of running the service is frequency of training - this can be used to determine when to train engine in order to control cost. If not specified: the default value for 'CreateEngine' method is 'TRAINING'. The default value for 'UpdateEngine' method is to keep the state the same as before. Possible values: ["PAUSED", "TRAINING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#training_state DiscoveryEngineRecommendationEngine#training_state}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of engine.

e.g., 'recommended-for-you'.
This field together with MediaRecommendationEngineConfig.optimizationObjective describes
engine metadata to use to control engine training and serving.
Currently supported values: 'recommended-for-you', 'others-you-may-like',
'more-like-this', 'most-popular-items'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#type DiscoveryEngineRecommendationEngine#type}

---

### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_recommendation_engine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig;

DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.builder()
//  .mostPopularConfig(DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig)
//  .recommendedForYouConfig(DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.property.mostPopularConfig">mostPopularConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a></code> | most_popular_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.property.recommendedForYouConfig">recommendedForYouConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a></code> | recommended_for_you_config block. |

---

##### `mostPopularConfig`<sup>Optional</sup> <a name="mostPopularConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.property.mostPopularConfig"></a>

```java
public DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig getMostPopularConfig();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a>

most_popular_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#most_popular_config DiscoveryEngineRecommendationEngine#most_popular_config}

---

##### `recommendedForYouConfig`<sup>Optional</sup> <a name="recommendedForYouConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.property.recommendedForYouConfig"></a>

```java
public DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig getRecommendedForYouConfig();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a>

recommended_for_you_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#recommended_for_you_config DiscoveryEngineRecommendationEngine#recommended_for_you_config}

---

### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_recommendation_engine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig;

DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig.builder()
//  .timeWindowDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig.property.timeWindowDays">timeWindowDays</a></code> | <code>java.lang.Number</code> | The time window of which the engine is queried at training and prediction time. |

---

##### `timeWindowDays`<sup>Optional</sup> <a name="timeWindowDays" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig.property.timeWindowDays"></a>

```java
public java.lang.Number getTimeWindowDays();
```

- *Type:* java.lang.Number

The time window of which the engine is queried at training and prediction time.

Positive integers only. The value translates to the
last X days of events. Currently required for the 'most-popular-items'
engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#time_window_days DiscoveryEngineRecommendationEngine#time_window_days}

---

### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_recommendation_engine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig;

DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig.builder()
//  .contextEventType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig.property.contextEventType">contextEventType</a></code> | <code>java.lang.String</code> | The type of event with which the engine is queried at prediction time. |

---

##### `contextEventType`<sup>Optional</sup> <a name="contextEventType" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig.property.contextEventType"></a>

```java
public java.lang.String getContextEventType();
```

- *Type:* java.lang.String

The type of event with which the engine is queried at prediction time.

If set to 'generic', only 'view-item', 'media-play',and
'media-complete' will be used as 'context-event' in engine training. If
set to 'view-home-page', 'view-home-page' will also be used as
'context-events' in addition to 'view-item', 'media-play', and
'media-complete'. Currently supported for the 'recommended-for-you'
engine. Currently supported values: 'view-home-page', 'generic'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#context_event_type DiscoveryEngineRecommendationEngine#context_event_type}

---

### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_recommendation_engine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig;

DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.builder()
//  .targetField(java.lang.String)
//  .targetFieldValueFloat(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.property.targetField">targetField</a></code> | <code>java.lang.String</code> | The name of the field to target. Currently supported values: 'watch-percentage', 'watch-time'. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.property.targetFieldValueFloat">targetFieldValueFloat</a></code> | <code>java.lang.Number</code> | The threshold to be applied to the target (e.g., 0.5). |

---

##### `targetField`<sup>Optional</sup> <a name="targetField" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.property.targetField"></a>

```java
public java.lang.String getTargetField();
```

- *Type:* java.lang.String

The name of the field to target. Currently supported values: 'watch-percentage', 'watch-time'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#target_field DiscoveryEngineRecommendationEngine#target_field}

---

##### `targetFieldValueFloat`<sup>Optional</sup> <a name="targetFieldValueFloat" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.property.targetFieldValueFloat"></a>

```java
public java.lang.Number getTargetFieldValueFloat();
```

- *Type:* java.lang.Number

The threshold to be applied to the target (e.g., 0.5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#target_field_value_float DiscoveryEngineRecommendationEngine#target_field_value_float}

---

### DiscoveryEngineRecommendationEngineTimeouts <a name="DiscoveryEngineRecommendationEngineTimeouts" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_recommendation_engine.DiscoveryEngineRecommendationEngineTimeouts;

DiscoveryEngineRecommendationEngineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#create DiscoveryEngineRecommendationEngine#create}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#delete DiscoveryEngineRecommendationEngine#delete}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#update DiscoveryEngineRecommendationEngine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#create DiscoveryEngineRecommendationEngine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#delete DiscoveryEngineRecommendationEngine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#update DiscoveryEngineRecommendationEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineRecommendationEngineCommonConfigOutputReference <a name="DiscoveryEngineRecommendationEngineCommonConfigOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_recommendation_engine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference;

new DiscoveryEngineRecommendationEngineCommonConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.resetCompanyName">resetCompanyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompanyName` <a name="resetCompanyName" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.resetCompanyName"></a>

```java
public void resetCompanyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.companyNameInput">companyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.companyName">companyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `companyNameInput`<sup>Optional</sup> <a name="companyNameInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.companyNameInput"></a>

```java
public java.lang.String getCompanyNameInput();
```

- *Type:* java.lang.String

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineRecommendationEngineCommonConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a>

---


### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_recommendation_engine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference;

new DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resetTimeWindowDays">resetTimeWindowDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeWindowDays` <a name="resetTimeWindowDays" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resetTimeWindowDays"></a>

```java
public void resetTimeWindowDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.timeWindowDaysInput">timeWindowDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.timeWindowDays">timeWindowDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeWindowDaysInput`<sup>Optional</sup> <a name="timeWindowDaysInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.timeWindowDaysInput"></a>

```java
public java.lang.Number getTimeWindowDaysInput();
```

- *Type:* java.lang.Number

---

##### `timeWindowDays`<sup>Required</sup> <a name="timeWindowDays" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.timeWindowDays"></a>

```java
public java.lang.Number getTimeWindowDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a>

---


### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_recommendation_engine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference;

new DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putMostPopularConfig">putMostPopularConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putRecommendedForYouConfig">putRecommendedForYouConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resetMostPopularConfig">resetMostPopularConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resetRecommendedForYouConfig">resetRecommendedForYouConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMostPopularConfig` <a name="putMostPopularConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putMostPopularConfig"></a>

```java
public void putMostPopularConfig(DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putMostPopularConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a>

---

##### `putRecommendedForYouConfig` <a name="putRecommendedForYouConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putRecommendedForYouConfig"></a>

```java
public void putRecommendedForYouConfig(DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putRecommendedForYouConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a>

---

##### `resetMostPopularConfig` <a name="resetMostPopularConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resetMostPopularConfig"></a>

```java
public void resetMostPopularConfig()
```

##### `resetRecommendedForYouConfig` <a name="resetRecommendedForYouConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resetRecommendedForYouConfig"></a>

```java
public void resetRecommendedForYouConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.mostPopularConfig">mostPopularConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.recommendedForYouConfig">recommendedForYouConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.mostPopularConfigInput">mostPopularConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.recommendedForYouConfigInput">recommendedForYouConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mostPopularConfig`<sup>Required</sup> <a name="mostPopularConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.mostPopularConfig"></a>

```java
public DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference getMostPopularConfig();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference</a>

---

##### `recommendedForYouConfig`<sup>Required</sup> <a name="recommendedForYouConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.recommendedForYouConfig"></a>

```java
public DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference getRecommendedForYouConfig();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference</a>

---

##### `mostPopularConfigInput`<sup>Optional</sup> <a name="mostPopularConfigInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.mostPopularConfigInput"></a>

```java
public DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig getMostPopularConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a>

---

##### `recommendedForYouConfigInput`<sup>Optional</sup> <a name="recommendedForYouConfigInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.recommendedForYouConfigInput"></a>

```java
public DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig getRecommendedForYouConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a>

---


### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_recommendation_engine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference;

new DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resetContextEventType">resetContextEventType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContextEventType` <a name="resetContextEventType" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resetContextEventType"></a>

```java
public void resetContextEventType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.contextEventTypeInput">contextEventTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.contextEventType">contextEventType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contextEventTypeInput`<sup>Optional</sup> <a name="contextEventTypeInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.contextEventTypeInput"></a>

```java
public java.lang.String getContextEventTypeInput();
```

- *Type:* java.lang.String

---

##### `contextEventType`<sup>Required</sup> <a name="contextEventType" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.contextEventType"></a>

```java
public java.lang.String getContextEventType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a>

---


### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_recommendation_engine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference;

new DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resetTargetField">resetTargetField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resetTargetFieldValueFloat">resetTargetFieldValueFloat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetField` <a name="resetTargetField" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resetTargetField"></a>

```java
public void resetTargetField()
```

##### `resetTargetFieldValueFloat` <a name="resetTargetFieldValueFloat" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resetTargetFieldValueFloat"></a>

```java
public void resetTargetFieldValueFloat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldInput">targetFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldValueFloatInput">targetFieldValueFloatInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetField">targetField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldValueFloat">targetFieldValueFloat</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetFieldInput`<sup>Optional</sup> <a name="targetFieldInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldInput"></a>

```java
public java.lang.String getTargetFieldInput();
```

- *Type:* java.lang.String

---

##### `targetFieldValueFloatInput`<sup>Optional</sup> <a name="targetFieldValueFloatInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldValueFloatInput"></a>

```java
public java.lang.Number getTargetFieldValueFloatInput();
```

- *Type:* java.lang.Number

---

##### `targetField`<sup>Required</sup> <a name="targetField" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetField"></a>

```java
public java.lang.String getTargetField();
```

- *Type:* java.lang.String

---

##### `targetFieldValueFloat`<sup>Required</sup> <a name="targetFieldValueFloat" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldValueFloat"></a>

```java
public java.lang.Number getTargetFieldValueFloat();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a>

---


### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_recommendation_engine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference;

new DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putEngineFeaturesConfig">putEngineFeaturesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putOptimizationObjectiveConfig">putOptimizationObjectiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetEngineFeaturesConfig">resetEngineFeaturesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetOptimizationObjective">resetOptimizationObjective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetOptimizationObjectiveConfig">resetOptimizationObjectiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetTrainingState">resetTrainingState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEngineFeaturesConfig` <a name="putEngineFeaturesConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putEngineFeaturesConfig"></a>

```java
public void putEngineFeaturesConfig(DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putEngineFeaturesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a>

---

##### `putOptimizationObjectiveConfig` <a name="putOptimizationObjectiveConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putOptimizationObjectiveConfig"></a>

```java
public void putOptimizationObjectiveConfig(DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putOptimizationObjectiveConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a>

---

##### `resetEngineFeaturesConfig` <a name="resetEngineFeaturesConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetEngineFeaturesConfig"></a>

```java
public void resetEngineFeaturesConfig()
```

##### `resetOptimizationObjective` <a name="resetOptimizationObjective" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetOptimizationObjective"></a>

```java
public void resetOptimizationObjective()
```

##### `resetOptimizationObjectiveConfig` <a name="resetOptimizationObjectiveConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetOptimizationObjectiveConfig"></a>

```java
public void resetOptimizationObjectiveConfig()
```

##### `resetTrainingState` <a name="resetTrainingState" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetTrainingState"></a>

```java
public void resetTrainingState()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.engineFeaturesConfig">engineFeaturesConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveConfig">optimizationObjectiveConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.engineFeaturesConfigInput">engineFeaturesConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveConfigInput">optimizationObjectiveConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveInput">optimizationObjectiveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.trainingStateInput">trainingStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjective">optimizationObjective</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.trainingState">trainingState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `engineFeaturesConfig`<sup>Required</sup> <a name="engineFeaturesConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.engineFeaturesConfig"></a>

```java
public DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference getEngineFeaturesConfig();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference</a>

---

##### `optimizationObjectiveConfig`<sup>Required</sup> <a name="optimizationObjectiveConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveConfig"></a>

```java
public DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference getOptimizationObjectiveConfig();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference</a>

---

##### `engineFeaturesConfigInput`<sup>Optional</sup> <a name="engineFeaturesConfigInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.engineFeaturesConfigInput"></a>

```java
public DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig getEngineFeaturesConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a>

---

##### `optimizationObjectiveConfigInput`<sup>Optional</sup> <a name="optimizationObjectiveConfigInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveConfigInput"></a>

```java
public DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig getOptimizationObjectiveConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a>

---

##### `optimizationObjectiveInput`<sup>Optional</sup> <a name="optimizationObjectiveInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveInput"></a>

```java
public java.lang.String getOptimizationObjectiveInput();
```

- *Type:* java.lang.String

---

##### `trainingStateInput`<sup>Optional</sup> <a name="trainingStateInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.trainingStateInput"></a>

```java
public java.lang.String getTrainingStateInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `optimizationObjective`<sup>Required</sup> <a name="optimizationObjective" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjective"></a>

```java
public java.lang.String getOptimizationObjective();
```

- *Type:* java.lang.String

---

##### `trainingState`<sup>Required</sup> <a name="trainingState" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.trainingState"></a>

```java
public java.lang.String getTrainingState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

---


### DiscoveryEngineRecommendationEngineTimeoutsOutputReference <a name="DiscoveryEngineRecommendationEngineTimeoutsOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_recommendation_engine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference;

new DiscoveryEngineRecommendationEngineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts">DiscoveryEngineRecommendationEngineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts">DiscoveryEngineRecommendationEngineTimeouts</a>

---



