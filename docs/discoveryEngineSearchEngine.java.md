# `discoveryEngineSearchEngine` Submodule <a name="`discoveryEngineSearchEngine` Submodule" id="@cdktf/provider-google.discoveryEngineSearchEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineSearchEngine <a name="DiscoveryEngineSearchEngine" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine google_discovery_engine_search_engine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngine;

DiscoveryEngineSearchEngine.Builder.create(Construct scope, java.lang.String id)
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
    .collectionId(java.lang.String)
    .dataStoreIds(java.util.List<java.lang.String>)
    .displayName(java.lang.String)
    .engineId(java.lang.String)
    .location(java.lang.String)
    .searchEngineConfig(DiscoveryEngineSearchEngineSearchEngineConfig)
//  .commonConfig(DiscoveryEngineSearchEngineCommonConfig)
//  .id(java.lang.String)
//  .industryVertical(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(DiscoveryEngineSearchEngineTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The collection ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.dataStoreIds">dataStoreIds</a></code> | <code>java.util.List<java.lang.String></code> | The data stores associated with this engine. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.engineId">engineId</a></code> | <code>java.lang.String</code> | Unique ID to use for Search Engine App. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.searchEngineConfig">searchEngineConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a></code> | search_engine_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.commonConfig">commonConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#id DiscoveryEngineSearchEngine#id}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | The industry vertical that the engine registers. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#project DiscoveryEngineSearchEngine#project}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.collectionId"></a>

- *Type:* java.lang.String

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#collection_id DiscoveryEngineSearchEngine#collection_id}

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.dataStoreIds"></a>

- *Type:* java.util.List<java.lang.String>

The data stores associated with this engine.

For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#data_store_ids DiscoveryEngineSearchEngine#data_store_ids}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#display_name DiscoveryEngineSearchEngine#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.engineId"></a>

- *Type:* java.lang.String

Unique ID to use for Search Engine App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#engine_id DiscoveryEngineSearchEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#location DiscoveryEngineSearchEngine#location}

---

##### `searchEngineConfig`<sup>Required</sup> <a name="searchEngineConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.searchEngineConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a>

search_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#search_engine_config DiscoveryEngineSearchEngine#search_engine_config}

---

##### `commonConfig`<sup>Optional</sup> <a name="commonConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.commonConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#common_config DiscoveryEngineSearchEngine#common_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#id DiscoveryEngineSearchEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industryVertical`<sup>Optional</sup> <a name="industryVertical" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.industryVertical"></a>

- *Type:* java.lang.String

The industry vertical that the engine registers.

The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#industry_vertical DiscoveryEngineSearchEngine#industry_vertical}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#project DiscoveryEngineSearchEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#timeouts DiscoveryEngineSearchEngine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putCommonConfig">putCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putSearchEngineConfig">putSearchEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetCommonConfig">resetCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetIndustryVertical">resetIndustryVertical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCommonConfig` <a name="putCommonConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putCommonConfig"></a>

```java
public void putCommonConfig(DiscoveryEngineSearchEngineCommonConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putCommonConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a>

---

##### `putSearchEngineConfig` <a name="putSearchEngineConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putSearchEngineConfig"></a>

```java
public void putSearchEngineConfig(DiscoveryEngineSearchEngineSearchEngineConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putSearchEngineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putTimeouts"></a>

```java
public void putTimeouts(DiscoveryEngineSearchEngineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a>

---

##### `resetCommonConfig` <a name="resetCommonConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetCommonConfig"></a>

```java
public void resetCommonConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetId"></a>

```java
public void resetId()
```

##### `resetIndustryVertical` <a name="resetIndustryVertical" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetIndustryVertical"></a>

```java
public void resetIndustryVertical()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DiscoveryEngineSearchEngine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngine;

DiscoveryEngineSearchEngine.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngine;

DiscoveryEngineSearchEngine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngine;

DiscoveryEngineSearchEngine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngine;

DiscoveryEngineSearchEngine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DiscoveryEngineSearchEngine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DiscoveryEngineSearchEngine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DiscoveryEngineSearchEngine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DiscoveryEngineSearchEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineSearchEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.commonConfig">commonConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference">DiscoveryEngineSearchEngineCommonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.searchEngineConfig">searchEngineConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference">DiscoveryEngineSearchEngineSearchEngineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference">DiscoveryEngineSearchEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.collectionIdInput">collectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.commonConfigInput">commonConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dataStoreIdsInput">dataStoreIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.engineIdInput">engineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.industryVerticalInput">industryVerticalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.searchEngineConfigInput">searchEngineConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dataStoreIds">dataStoreIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.engineId">engineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `commonConfig`<sup>Required</sup> <a name="commonConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.commonConfig"></a>

```java
public DiscoveryEngineSearchEngineCommonConfigOutputReference getCommonConfig();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference">DiscoveryEngineSearchEngineCommonConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `searchEngineConfig`<sup>Required</sup> <a name="searchEngineConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.searchEngineConfig"></a>

```java
public DiscoveryEngineSearchEngineSearchEngineConfigOutputReference getSearchEngineConfig();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference">DiscoveryEngineSearchEngineSearchEngineConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.timeouts"></a>

```java
public DiscoveryEngineSearchEngineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference">DiscoveryEngineSearchEngineTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.collectionIdInput"></a>

```java
public java.lang.String getCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `commonConfigInput`<sup>Optional</sup> <a name="commonConfigInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.commonConfigInput"></a>

```java
public DiscoveryEngineSearchEngineCommonConfig getCommonConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a>

---

##### `dataStoreIdsInput`<sup>Optional</sup> <a name="dataStoreIdsInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dataStoreIdsInput"></a>

```java
public java.util.List<java.lang.String> getDataStoreIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.engineIdInput"></a>

```java
public java.lang.String getEngineIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `industryVerticalInput`<sup>Optional</sup> <a name="industryVerticalInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.industryVerticalInput"></a>

```java
public java.lang.String getIndustryVerticalInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `searchEngineConfigInput`<sup>Optional</sup> <a name="searchEngineConfigInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.searchEngineConfigInput"></a>

```java
public DiscoveryEngineSearchEngineSearchEngineConfig getSearchEngineConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dataStoreIds"></a>

```java
public java.util.List<java.lang.String> getDataStoreIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `industryVertical`<sup>Required</sup> <a name="industryVertical" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.industryVertical"></a>

```java
public java.lang.String getIndustryVertical();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineSearchEngineCommonConfig <a name="DiscoveryEngineSearchEngineCommonConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngineCommonConfig;

DiscoveryEngineSearchEngineCommonConfig.builder()
//  .companyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig.property.companyName">companyName</a></code> | <code>java.lang.String</code> | The name of the company, business or entity that is associated with the engine. |

---

##### `companyName`<sup>Optional</sup> <a name="companyName" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.cd

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#company_name DiscoveryEngineSearchEngine#company_name}

---

### DiscoveryEngineSearchEngineConfig <a name="DiscoveryEngineSearchEngineConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngineConfig;

DiscoveryEngineSearchEngineConfig.builder()
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
    .collectionId(java.lang.String)
    .dataStoreIds(java.util.List<java.lang.String>)
    .displayName(java.lang.String)
    .engineId(java.lang.String)
    .location(java.lang.String)
    .searchEngineConfig(DiscoveryEngineSearchEngineSearchEngineConfig)
//  .commonConfig(DiscoveryEngineSearchEngineCommonConfig)
//  .id(java.lang.String)
//  .industryVertical(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(DiscoveryEngineSearchEngineTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The collection ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.dataStoreIds">dataStoreIds</a></code> | <code>java.util.List<java.lang.String></code> | The data stores associated with this engine. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.engineId">engineId</a></code> | <code>java.lang.String</code> | Unique ID to use for Search Engine App. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.searchEngineConfig">searchEngineConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a></code> | search_engine_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.commonConfig">commonConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#id DiscoveryEngineSearchEngine#id}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | The industry vertical that the engine registers. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#project DiscoveryEngineSearchEngine#project}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#collection_id DiscoveryEngineSearchEngine#collection_id}

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.dataStoreIds"></a>

```java
public java.util.List<java.lang.String> getDataStoreIds();
```

- *Type:* java.util.List<java.lang.String>

The data stores associated with this engine.

For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#data_store_ids DiscoveryEngineSearchEngine#data_store_ids}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#display_name DiscoveryEngineSearchEngine#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

Unique ID to use for Search Engine App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#engine_id DiscoveryEngineSearchEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#location DiscoveryEngineSearchEngine#location}

---

##### `searchEngineConfig`<sup>Required</sup> <a name="searchEngineConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.searchEngineConfig"></a>

```java
public DiscoveryEngineSearchEngineSearchEngineConfig getSearchEngineConfig();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a>

search_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#search_engine_config DiscoveryEngineSearchEngine#search_engine_config}

---

##### `commonConfig`<sup>Optional</sup> <a name="commonConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.commonConfig"></a>

```java
public DiscoveryEngineSearchEngineCommonConfig getCommonConfig();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#common_config DiscoveryEngineSearchEngine#common_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#id DiscoveryEngineSearchEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industryVertical`<sup>Optional</sup> <a name="industryVertical" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.industryVertical"></a>

```java
public java.lang.String getIndustryVertical();
```

- *Type:* java.lang.String

The industry vertical that the engine registers.

The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#industry_vertical DiscoveryEngineSearchEngine#industry_vertical}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#project DiscoveryEngineSearchEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.timeouts"></a>

```java
public DiscoveryEngineSearchEngineTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#timeouts DiscoveryEngineSearchEngine#timeouts}

---

### DiscoveryEngineSearchEngineSearchEngineConfig <a name="DiscoveryEngineSearchEngineSearchEngineConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngineSearchEngineConfig;

DiscoveryEngineSearchEngineSearchEngineConfig.builder()
//  .searchAddOns(java.util.List<java.lang.String>)
//  .searchTier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.property.searchAddOns">searchAddOns</a></code> | <code>java.util.List<java.lang.String></code> | The add-on that this search engine enables. Possible values: ["SEARCH_ADD_ON_LLM"]. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.property.searchTier">searchTier</a></code> | <code>java.lang.String</code> | The search feature tier of this engine. |

---

##### `searchAddOns`<sup>Optional</sup> <a name="searchAddOns" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.property.searchAddOns"></a>

```java
public java.util.List<java.lang.String> getSearchAddOns();
```

- *Type:* java.util.List<java.lang.String>

The add-on that this search engine enables. Possible values: ["SEARCH_ADD_ON_LLM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#search_add_ons DiscoveryEngineSearchEngine#search_add_ons}

---

##### `searchTier`<sup>Optional</sup> <a name="searchTier" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.property.searchTier"></a>

```java
public java.lang.String getSearchTier();
```

- *Type:* java.lang.String

The search feature tier of this engine.

Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified. Default value: "SEARCH_TIER_STANDARD" Possible values: ["SEARCH_TIER_STANDARD", "SEARCH_TIER_ENTERPRISE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#search_tier DiscoveryEngineSearchEngine#search_tier}

---

### DiscoveryEngineSearchEngineTimeouts <a name="DiscoveryEngineSearchEngineTimeouts" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngineTimeouts;

DiscoveryEngineSearchEngineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#create DiscoveryEngineSearchEngine#create}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#delete DiscoveryEngineSearchEngine#delete}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#update DiscoveryEngineSearchEngine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#create DiscoveryEngineSearchEngine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#delete DiscoveryEngineSearchEngine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/discovery_engine_search_engine#update DiscoveryEngineSearchEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineSearchEngineCommonConfigOutputReference <a name="DiscoveryEngineSearchEngineCommonConfigOutputReference" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngineCommonConfigOutputReference;

new DiscoveryEngineSearchEngineCommonConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.resetCompanyName">resetCompanyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompanyName` <a name="resetCompanyName" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.resetCompanyName"></a>

```java
public void resetCompanyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyNameInput">companyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyName">companyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `companyNameInput`<sup>Optional</sup> <a name="companyNameInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyNameInput"></a>

```java
public java.lang.String getCompanyNameInput();
```

- *Type:* java.lang.String

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineSearchEngineCommonConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a>

---


### DiscoveryEngineSearchEngineSearchEngineConfigOutputReference <a name="DiscoveryEngineSearchEngineSearchEngineConfigOutputReference" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference;

new DiscoveryEngineSearchEngineSearchEngineConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchAddOns">resetSearchAddOns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchTier">resetSearchTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSearchAddOns` <a name="resetSearchAddOns" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchAddOns"></a>

```java
public void resetSearchAddOns()
```

##### `resetSearchTier` <a name="resetSearchTier" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchTier"></a>

```java
public void resetSearchTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOnsInput">searchAddOnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTierInput">searchTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOns">searchAddOns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTier">searchTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `searchAddOnsInput`<sup>Optional</sup> <a name="searchAddOnsInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOnsInput"></a>

```java
public java.util.List<java.lang.String> getSearchAddOnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchTierInput`<sup>Optional</sup> <a name="searchTierInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTierInput"></a>

```java
public java.lang.String getSearchTierInput();
```

- *Type:* java.lang.String

---

##### `searchAddOns`<sup>Required</sup> <a name="searchAddOns" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOns"></a>

```java
public java.util.List<java.lang.String> getSearchAddOns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchTier`<sup>Required</sup> <a name="searchTier" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTier"></a>

```java
public java.lang.String getSearchTier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineSearchEngineSearchEngineConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a>

---


### DiscoveryEngineSearchEngineTimeoutsOutputReference <a name="DiscoveryEngineSearchEngineTimeoutsOutputReference" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngineTimeoutsOutputReference;

new DiscoveryEngineSearchEngineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a>

---



