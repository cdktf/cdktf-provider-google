# `discoveryEngineDataStore` Submodule <a name="`discoveryEngineDataStore` Submodule" id="@cdktf/provider-google.discoveryEngineDataStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineDataStore <a name="DiscoveryEngineDataStore" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store google_discovery_engine_data_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStore(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  content_config: str,
  data_store_id: str,
  display_name: str,
  industry_vertical: str,
  location: str,
  advanced_site_search_config: DiscoveryEngineDataStoreAdvancedSiteSearchConfig = None,
  create_advanced_site_search: typing.Union[bool, IResolvable] = None,
  document_processing_config: DiscoveryEngineDataStoreDocumentProcessingConfig = None,
  id: str = None,
  project: str = None,
  skip_default_schema_creation: typing.Union[bool, IResolvable] = None,
  solution_types: typing.List[str] = None,
  timeouts: DiscoveryEngineDataStoreTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.contentConfig">content_config</a></code> | <code>str</code> | The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"]. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.dataStoreId">data_store_id</a></code> | <code>str</code> | The unique id of the data store. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the data store. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.industryVertical">industry_vertical</a></code> | <code>str</code> | The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"]. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.advancedSiteSearchConfig">advanced_site_search_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a></code> | advanced_site_search_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.createAdvancedSiteSearch">create_advanced_site_search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, an advanced data store for site search will be created. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.documentProcessingConfig">document_processing_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a></code> | document_processing_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#id DiscoveryEngineDataStore#id}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#project DiscoveryEngineDataStore#project}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.skipDefaultSchemaCreation">skip_default_schema_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean flag indicating whether to skip the default schema creation for the data store. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.solutionTypes">solution_types</a></code> | <code>typing.List[str]</code> | The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"]. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content_config`<sup>Required</sup> <a name="content_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.contentConfig"></a>

- *Type:* str

The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#content_config DiscoveryEngineDataStore#content_config}

---

##### `data_store_id`<sup>Required</sup> <a name="data_store_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.dataStoreId"></a>

- *Type:* str

The unique id of the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#data_store_id DiscoveryEngineDataStore#data_store_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the data store.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#display_name DiscoveryEngineDataStore#display_name}

---

##### `industry_vertical`<sup>Required</sup> <a name="industry_vertical" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.industryVertical"></a>

- *Type:* str

The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#industry_vertical DiscoveryEngineDataStore#industry_vertical}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#location DiscoveryEngineDataStore#location}

---

##### `advanced_site_search_config`<sup>Optional</sup> <a name="advanced_site_search_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.advancedSiteSearchConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a>

advanced_site_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#advanced_site_search_config DiscoveryEngineDataStore#advanced_site_search_config}

---

##### `create_advanced_site_search`<sup>Optional</sup> <a name="create_advanced_site_search" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.createAdvancedSiteSearch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, an advanced data store for site search will be created.

If the
data store is not configured as site search (GENERIC vertical and
PUBLIC_WEBSITE contentConfig), this flag will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#create_advanced_site_search DiscoveryEngineDataStore#create_advanced_site_search}

---

##### `document_processing_config`<sup>Optional</sup> <a name="document_processing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.documentProcessingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a>

document_processing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#document_processing_config DiscoveryEngineDataStore#document_processing_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#id DiscoveryEngineDataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#project DiscoveryEngineDataStore#project}.

---

##### `skip_default_schema_creation`<sup>Optional</sup> <a name="skip_default_schema_creation" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.skipDefaultSchemaCreation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean flag indicating whether to skip the default schema creation for the data store.

Only enable this flag if you are certain that the default
schema is incompatible with your use case.
If set to true, you must manually create a schema for the data store
before any documents can be ingested.
This flag cannot be specified if 'data_store.starting_schema' is
specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#skip_default_schema_creation DiscoveryEngineDataStore#skip_default_schema_creation}

---

##### `solution_types`<sup>Optional</sup> <a name="solution_types" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.solutionTypes"></a>

- *Type:* typing.List[str]

The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#solution_types DiscoveryEngineDataStore#solution_types}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#timeouts DiscoveryEngineDataStore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putAdvancedSiteSearchConfig">put_advanced_site_search_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putDocumentProcessingConfig">put_document_processing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetAdvancedSiteSearchConfig">reset_advanced_site_search_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetCreateAdvancedSiteSearch">reset_create_advanced_site_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetDocumentProcessingConfig">reset_document_processing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetSkipDefaultSchemaCreation">reset_skip_default_schema_creation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetSolutionTypes">reset_solution_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_advanced_site_search_config` <a name="put_advanced_site_search_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putAdvancedSiteSearchConfig"></a>

```python
def put_advanced_site_search_config(
  disable_automatic_refresh: typing.Union[bool, IResolvable] = None,
  disable_initial_index: typing.Union[bool, IResolvable] = None
) -> None
```

###### `disable_automatic_refresh`<sup>Optional</sup> <a name="disable_automatic_refresh" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putAdvancedSiteSearchConfig.parameter.disableAutomaticRefresh"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set true, automatic refresh is disabled for the DataStore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#disable_automatic_refresh DiscoveryEngineDataStore#disable_automatic_refresh}

---

###### `disable_initial_index`<sup>Optional</sup> <a name="disable_initial_index" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putAdvancedSiteSearchConfig.parameter.disableInitialIndex"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set true, initial indexing is disabled for the DataStore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#disable_initial_index DiscoveryEngineDataStore#disable_initial_index}

---

##### `put_document_processing_config` <a name="put_document_processing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putDocumentProcessingConfig"></a>

```python
def put_document_processing_config(
  chunking_config: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig = None,
  default_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig = None,
  parsing_config_overrides: typing.Union[IResolvable, typing.List[DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides]] = None
) -> None
```

###### `chunking_config`<sup>Optional</sup> <a name="chunking_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putDocumentProcessingConfig.parameter.chunkingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a>

chunking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#chunking_config DiscoveryEngineDataStore#chunking_config}

---

###### `default_parsing_config`<sup>Optional</sup> <a name="default_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putDocumentProcessingConfig.parameter.defaultParsingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a>

default_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#default_parsing_config DiscoveryEngineDataStore#default_parsing_config}

---

###### `parsing_config_overrides`<sup>Optional</sup> <a name="parsing_config_overrides" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putDocumentProcessingConfig.parameter.parsingConfigOverrides"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>]]

parsing_config_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#parsing_config_overrides DiscoveryEngineDataStore#parsing_config_overrides}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#create DiscoveryEngineDataStore#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#delete DiscoveryEngineDataStore#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#update DiscoveryEngineDataStore#update}.

---

##### `reset_advanced_site_search_config` <a name="reset_advanced_site_search_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetAdvancedSiteSearchConfig"></a>

```python
def reset_advanced_site_search_config() -> None
```

##### `reset_create_advanced_site_search` <a name="reset_create_advanced_site_search" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetCreateAdvancedSiteSearch"></a>

```python
def reset_create_advanced_site_search() -> None
```

##### `reset_document_processing_config` <a name="reset_document_processing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetDocumentProcessingConfig"></a>

```python
def reset_document_processing_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_skip_default_schema_creation` <a name="reset_skip_default_schema_creation" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetSkipDefaultSchemaCreation"></a>

```python
def reset_skip_default_schema_creation() -> None
```

##### `reset_solution_types` <a name="reset_solution_types" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetSolutionTypes"></a>

```python
def reset_solution_types() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DiscoveryEngineDataStore resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStore.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DiscoveryEngineDataStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DiscoveryEngineDataStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DiscoveryEngineDataStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineDataStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.advancedSiteSearchConfig">advanced_site_search_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference">DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.defaultSchemaId">default_schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.documentProcessingConfig">document_processing_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference">DiscoveryEngineDataStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.advancedSiteSearchConfigInput">advanced_site_search_config_input</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.contentConfigInput">content_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createAdvancedSiteSearchInput">create_advanced_site_search_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dataStoreIdInput">data_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.documentProcessingConfigInput">document_processing_config_input</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.industryVerticalInput">industry_vertical_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.skipDefaultSchemaCreationInput">skip_default_schema_creation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.solutionTypesInput">solution_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.contentConfig">content_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createAdvancedSiteSearch">create_advanced_site_search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dataStoreId">data_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.industryVertical">industry_vertical</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.skipDefaultSchemaCreation">skip_default_schema_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.solutionTypes">solution_types</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `advanced_site_search_config`<sup>Required</sup> <a name="advanced_site_search_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.advancedSiteSearchConfig"></a>

```python
advanced_site_search_config: DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference">DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `default_schema_id`<sup>Required</sup> <a name="default_schema_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.defaultSchemaId"></a>

```python
default_schema_id: str
```

- *Type:* str

---

##### `document_processing_config`<sup>Required</sup> <a name="document_processing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.documentProcessingConfig"></a>

```python
document_processing_config: DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.timeouts"></a>

```python
timeouts: DiscoveryEngineDataStoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference">DiscoveryEngineDataStoreTimeoutsOutputReference</a>

---

##### `advanced_site_search_config_input`<sup>Optional</sup> <a name="advanced_site_search_config_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.advancedSiteSearchConfigInput"></a>

```python
advanced_site_search_config_input: DiscoveryEngineDataStoreAdvancedSiteSearchConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a>

---

##### `content_config_input`<sup>Optional</sup> <a name="content_config_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.contentConfigInput"></a>

```python
content_config_input: str
```

- *Type:* str

---

##### `create_advanced_site_search_input`<sup>Optional</sup> <a name="create_advanced_site_search_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createAdvancedSiteSearchInput"></a>

```python
create_advanced_site_search_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_store_id_input`<sup>Optional</sup> <a name="data_store_id_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dataStoreIdInput"></a>

```python
data_store_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `document_processing_config_input`<sup>Optional</sup> <a name="document_processing_config_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.documentProcessingConfigInput"></a>

```python
document_processing_config_input: DiscoveryEngineDataStoreDocumentProcessingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `industry_vertical_input`<sup>Optional</sup> <a name="industry_vertical_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.industryVerticalInput"></a>

```python
industry_vertical_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `skip_default_schema_creation_input`<sup>Optional</sup> <a name="skip_default_schema_creation_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.skipDefaultSchemaCreationInput"></a>

```python
skip_default_schema_creation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `solution_types_input`<sup>Optional</sup> <a name="solution_types_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.solutionTypesInput"></a>

```python
solution_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DiscoveryEngineDataStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>]

---

##### `content_config`<sup>Required</sup> <a name="content_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.contentConfig"></a>

```python
content_config: str
```

- *Type:* str

---

##### `create_advanced_site_search`<sup>Required</sup> <a name="create_advanced_site_search" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createAdvancedSiteSearch"></a>

```python
create_advanced_site_search: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_store_id`<sup>Required</sup> <a name="data_store_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dataStoreId"></a>

```python
data_store_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `industry_vertical`<sup>Required</sup> <a name="industry_vertical" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.industryVertical"></a>

```python
industry_vertical: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `skip_default_schema_creation`<sup>Required</sup> <a name="skip_default_schema_creation" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.skipDefaultSchemaCreation"></a>

```python
skip_default_schema_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `solution_types`<sup>Required</sup> <a name="solution_types" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.solutionTypes"></a>

```python
solution_types: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineDataStoreAdvancedSiteSearchConfig <a name="DiscoveryEngineDataStoreAdvancedSiteSearchConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig(
  disable_automatic_refresh: typing.Union[bool, IResolvable] = None,
  disable_initial_index: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig.property.disableAutomaticRefresh">disable_automatic_refresh</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set true, automatic refresh is disabled for the DataStore. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig.property.disableInitialIndex">disable_initial_index</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set true, initial indexing is disabled for the DataStore. |

---

##### `disable_automatic_refresh`<sup>Optional</sup> <a name="disable_automatic_refresh" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig.property.disableAutomaticRefresh"></a>

```python
disable_automatic_refresh: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set true, automatic refresh is disabled for the DataStore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#disable_automatic_refresh DiscoveryEngineDataStore#disable_automatic_refresh}

---

##### `disable_initial_index`<sup>Optional</sup> <a name="disable_initial_index" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig.property.disableInitialIndex"></a>

```python
disable_initial_index: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set true, initial indexing is disabled for the DataStore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#disable_initial_index DiscoveryEngineDataStore#disable_initial_index}

---

### DiscoveryEngineDataStoreConfig <a name="DiscoveryEngineDataStoreConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  content_config: str,
  data_store_id: str,
  display_name: str,
  industry_vertical: str,
  location: str,
  advanced_site_search_config: DiscoveryEngineDataStoreAdvancedSiteSearchConfig = None,
  create_advanced_site_search: typing.Union[bool, IResolvable] = None,
  document_processing_config: DiscoveryEngineDataStoreDocumentProcessingConfig = None,
  id: str = None,
  project: str = None,
  skip_default_schema_creation: typing.Union[bool, IResolvable] = None,
  solution_types: typing.List[str] = None,
  timeouts: DiscoveryEngineDataStoreTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.contentConfig">content_config</a></code> | <code>str</code> | The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"]. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.dataStoreId">data_store_id</a></code> | <code>str</code> | The unique id of the data store. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the data store. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.industryVertical">industry_vertical</a></code> | <code>str</code> | The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"]. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.advancedSiteSearchConfig">advanced_site_search_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a></code> | advanced_site_search_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.createAdvancedSiteSearch">create_advanced_site_search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, an advanced data store for site search will be created. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.documentProcessingConfig">document_processing_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a></code> | document_processing_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#id DiscoveryEngineDataStore#id}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#project DiscoveryEngineDataStore#project}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.skipDefaultSchemaCreation">skip_default_schema_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean flag indicating whether to skip the default schema creation for the data store. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.solutionTypes">solution_types</a></code> | <code>typing.List[str]</code> | The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"]. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content_config`<sup>Required</sup> <a name="content_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.contentConfig"></a>

```python
content_config: str
```

- *Type:* str

The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#content_config DiscoveryEngineDataStore#content_config}

---

##### `data_store_id`<sup>Required</sup> <a name="data_store_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.dataStoreId"></a>

```python
data_store_id: str
```

- *Type:* str

The unique id of the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#data_store_id DiscoveryEngineDataStore#data_store_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the data store.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#display_name DiscoveryEngineDataStore#display_name}

---

##### `industry_vertical`<sup>Required</sup> <a name="industry_vertical" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.industryVertical"></a>

```python
industry_vertical: str
```

- *Type:* str

The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#industry_vertical DiscoveryEngineDataStore#industry_vertical}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#location DiscoveryEngineDataStore#location}

---

##### `advanced_site_search_config`<sup>Optional</sup> <a name="advanced_site_search_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.advancedSiteSearchConfig"></a>

```python
advanced_site_search_config: DiscoveryEngineDataStoreAdvancedSiteSearchConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a>

advanced_site_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#advanced_site_search_config DiscoveryEngineDataStore#advanced_site_search_config}

---

##### `create_advanced_site_search`<sup>Optional</sup> <a name="create_advanced_site_search" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.createAdvancedSiteSearch"></a>

```python
create_advanced_site_search: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, an advanced data store for site search will be created.

If the
data store is not configured as site search (GENERIC vertical and
PUBLIC_WEBSITE contentConfig), this flag will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#create_advanced_site_search DiscoveryEngineDataStore#create_advanced_site_search}

---

##### `document_processing_config`<sup>Optional</sup> <a name="document_processing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.documentProcessingConfig"></a>

```python
document_processing_config: DiscoveryEngineDataStoreDocumentProcessingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a>

document_processing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#document_processing_config DiscoveryEngineDataStore#document_processing_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#id DiscoveryEngineDataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#project DiscoveryEngineDataStore#project}.

---

##### `skip_default_schema_creation`<sup>Optional</sup> <a name="skip_default_schema_creation" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.skipDefaultSchemaCreation"></a>

```python
skip_default_schema_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean flag indicating whether to skip the default schema creation for the data store.

Only enable this flag if you are certain that the default
schema is incompatible with your use case.
If set to true, you must manually create a schema for the data store
before any documents can be ingested.
This flag cannot be specified if 'data_store.starting_schema' is
specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#skip_default_schema_creation DiscoveryEngineDataStore#skip_default_schema_creation}

---

##### `solution_types`<sup>Optional</sup> <a name="solution_types" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.solutionTypes"></a>

```python
solution_types: typing.List[str]
```

- *Type:* typing.List[str]

The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#solution_types DiscoveryEngineDataStore#solution_types}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.timeouts"></a>

```python
timeouts: DiscoveryEngineDataStoreTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#timeouts DiscoveryEngineDataStore#timeouts}

---

### DiscoveryEngineDataStoreDocumentProcessingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig(
  chunking_config: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig = None,
  default_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig = None,
  parsing_config_overrides: typing.Union[IResolvable, typing.List[DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.property.chunkingConfig">chunking_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a></code> | chunking_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.property.defaultParsingConfig">default_parsing_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a></code> | default_parsing_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.property.parsingConfigOverrides">parsing_config_overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>]]</code> | parsing_config_overrides block. |

---

##### `chunking_config`<sup>Optional</sup> <a name="chunking_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.property.chunkingConfig"></a>

```python
chunking_config: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a>

chunking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#chunking_config DiscoveryEngineDataStore#chunking_config}

---

##### `default_parsing_config`<sup>Optional</sup> <a name="default_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.property.defaultParsingConfig"></a>

```python
default_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a>

default_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#default_parsing_config DiscoveryEngineDataStore#default_parsing_config}

---

##### `parsing_config_overrides`<sup>Optional</sup> <a name="parsing_config_overrides" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.property.parsingConfigOverrides"></a>

```python
parsing_config_overrides: typing.Union[IResolvable, typing.List[DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>]]

parsing_config_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#parsing_config_overrides DiscoveryEngineDataStore#parsing_config_overrides}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig(
  layout_based_chunking_config: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig.property.layoutBasedChunkingConfig">layout_based_chunking_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a></code> | layout_based_chunking_config block. |

---

##### `layout_based_chunking_config`<sup>Optional</sup> <a name="layout_based_chunking_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig.property.layoutBasedChunkingConfig"></a>

```python
layout_based_chunking_config: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a>

layout_based_chunking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#layout_based_chunking_config DiscoveryEngineDataStore#layout_based_chunking_config}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig(
  chunk_size: typing.Union[int, float] = None,
  include_ancestor_headings: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.property.chunkSize">chunk_size</a></code> | <code>typing.Union[int, float]</code> | The token size limit for each chunk. Supported values: 100-500 (inclusive). Default value: 500. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.property.includeAncestorHeadings">include_ancestor_headings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to include appending different levels of headings to chunks from the middle of the document to prevent context loss. |

---

##### `chunk_size`<sup>Optional</sup> <a name="chunk_size" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.property.chunkSize"></a>

```python
chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The token size limit for each chunk. Supported values: 100-500 (inclusive). Default value: 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#chunk_size DiscoveryEngineDataStore#chunk_size}

---

##### `include_ancestor_headings`<sup>Optional</sup> <a name="include_ancestor_headings" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.property.includeAncestorHeadings"></a>

```python
include_ancestor_headings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to include appending different levels of headings to chunks from the middle of the document to prevent context loss.

Default value: False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#include_ancestor_headings DiscoveryEngineDataStore#include_ancestor_headings}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig(
  digital_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig = None,
  layout_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig = None,
  ocr_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.digitalParsingConfig">digital_parsing_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a></code> | digital_parsing_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.layoutParsingConfig">layout_parsing_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a></code> | layout_parsing_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.ocrParsingConfig">ocr_parsing_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a></code> | ocr_parsing_config block. |

---

##### `digital_parsing_config`<sup>Optional</sup> <a name="digital_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.digitalParsingConfig"></a>

```python
digital_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a>

digital_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#digital_parsing_config DiscoveryEngineDataStore#digital_parsing_config}

---

##### `layout_parsing_config`<sup>Optional</sup> <a name="layout_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.layoutParsingConfig"></a>

```python
layout_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a>

layout_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#layout_parsing_config DiscoveryEngineDataStore#layout_parsing_config}

---

##### `ocr_parsing_config`<sup>Optional</sup> <a name="ocr_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.ocrParsingConfig"></a>

```python
ocr_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a>

ocr_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#ocr_parsing_config DiscoveryEngineDataStore#ocr_parsing_config}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig()
```


### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig()
```


### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig(
  use_native_text: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig.property.useNativeText">use_native_text</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, will use native text instead of OCR text on pages containing native text. |

---

##### `use_native_text`<sup>Optional</sup> <a name="use_native_text" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig.property.useNativeText"></a>

```python
use_native_text: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, will use native text instead of OCR text on pages containing native text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#use_native_text DiscoveryEngineDataStore#use_native_text}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides(
  file_type: str,
  digital_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig = None,
  layout_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig = None,
  ocr_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.fileType">file_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#file_type DiscoveryEngineDataStore#file_type}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.digitalParsingConfig">digital_parsing_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a></code> | digital_parsing_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.layoutParsingConfig">layout_parsing_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a></code> | layout_parsing_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.ocrParsingConfig">ocr_parsing_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a></code> | ocr_parsing_config block. |

---

##### `file_type`<sup>Required</sup> <a name="file_type" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.fileType"></a>

```python
file_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#file_type DiscoveryEngineDataStore#file_type}.

---

##### `digital_parsing_config`<sup>Optional</sup> <a name="digital_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.digitalParsingConfig"></a>

```python
digital_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a>

digital_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#digital_parsing_config DiscoveryEngineDataStore#digital_parsing_config}

---

##### `layout_parsing_config`<sup>Optional</sup> <a name="layout_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.layoutParsingConfig"></a>

```python
layout_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a>

layout_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#layout_parsing_config DiscoveryEngineDataStore#layout_parsing_config}

---

##### `ocr_parsing_config`<sup>Optional</sup> <a name="ocr_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.ocrParsingConfig"></a>

```python
ocr_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a>

ocr_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#ocr_parsing_config DiscoveryEngineDataStore#ocr_parsing_config}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig()
```


### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig()
```


### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig(
  use_native_text: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig.property.useNativeText">use_native_text</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, will use native text instead of OCR text on pages containing native text. |

---

##### `use_native_text`<sup>Optional</sup> <a name="use_native_text" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig.property.useNativeText"></a>

```python
use_native_text: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, will use native text instead of OCR text on pages containing native text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#use_native_text DiscoveryEngineDataStore#use_native_text}

---

### DiscoveryEngineDataStoreTimeouts <a name="DiscoveryEngineDataStoreTimeouts" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#create DiscoveryEngineDataStore#create}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#delete DiscoveryEngineDataStore#delete}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#update DiscoveryEngineDataStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#create DiscoveryEngineDataStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#delete DiscoveryEngineDataStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#update DiscoveryEngineDataStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference <a name="DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resetDisableAutomaticRefresh">reset_disable_automatic_refresh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resetDisableInitialIndex">reset_disable_initial_index</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_automatic_refresh` <a name="reset_disable_automatic_refresh" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resetDisableAutomaticRefresh"></a>

```python
def reset_disable_automatic_refresh() -> None
```

##### `reset_disable_initial_index` <a name="reset_disable_initial_index" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resetDisableInitialIndex"></a>

```python
def reset_disable_initial_index() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableAutomaticRefreshInput">disable_automatic_refresh_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableInitialIndexInput">disable_initial_index_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableAutomaticRefresh">disable_automatic_refresh</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableInitialIndex">disable_initial_index</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_automatic_refresh_input`<sup>Optional</sup> <a name="disable_automatic_refresh_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableAutomaticRefreshInput"></a>

```python
disable_automatic_refresh_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_initial_index_input`<sup>Optional</sup> <a name="disable_initial_index_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableInitialIndexInput"></a>

```python
disable_initial_index_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_automatic_refresh`<sup>Required</sup> <a name="disable_automatic_refresh" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableAutomaticRefresh"></a>

```python
disable_automatic_refresh: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_initial_index`<sup>Required</sup> <a name="disable_initial_index" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableInitialIndex"></a>

```python
disable_initial_index: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineDataStoreAdvancedSiteSearchConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resetChunkSize">reset_chunk_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resetIncludeAncestorHeadings">reset_include_ancestor_headings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_chunk_size` <a name="reset_chunk_size" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resetChunkSize"></a>

```python
def reset_chunk_size() -> None
```

##### `reset_include_ancestor_headings` <a name="reset_include_ancestor_headings" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resetIncludeAncestorHeadings"></a>

```python
def reset_include_ancestor_headings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.chunkSizeInput">chunk_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.includeAncestorHeadingsInput">include_ancestor_headings_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.chunkSize">chunk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.includeAncestorHeadings">include_ancestor_headings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chunk_size_input`<sup>Optional</sup> <a name="chunk_size_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.chunkSizeInput"></a>

```python
chunk_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `include_ancestor_headings_input`<sup>Optional</sup> <a name="include_ancestor_headings_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.includeAncestorHeadingsInput"></a>

```python
include_ancestor_headings_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `chunk_size`<sup>Required</sup> <a name="chunk_size" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.chunkSize"></a>

```python
chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `include_ancestor_headings`<sup>Required</sup> <a name="include_ancestor_headings" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.includeAncestorHeadings"></a>

```python
include_ancestor_headings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.putLayoutBasedChunkingConfig">put_layout_based_chunking_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resetLayoutBasedChunkingConfig">reset_layout_based_chunking_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_layout_based_chunking_config` <a name="put_layout_based_chunking_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.putLayoutBasedChunkingConfig"></a>

```python
def put_layout_based_chunking_config(
  chunk_size: typing.Union[int, float] = None,
  include_ancestor_headings: typing.Union[bool, IResolvable] = None
) -> None
```

###### `chunk_size`<sup>Optional</sup> <a name="chunk_size" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.putLayoutBasedChunkingConfig.parameter.chunkSize"></a>

- *Type:* typing.Union[int, float]

The token size limit for each chunk. Supported values: 100-500 (inclusive). Default value: 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#chunk_size DiscoveryEngineDataStore#chunk_size}

---

###### `include_ancestor_headings`<sup>Optional</sup> <a name="include_ancestor_headings" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.putLayoutBasedChunkingConfig.parameter.includeAncestorHeadings"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to include appending different levels of headings to chunks from the middle of the document to prevent context loss.

Default value: False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#include_ancestor_headings DiscoveryEngineDataStore#include_ancestor_headings}

---

##### `reset_layout_based_chunking_config` <a name="reset_layout_based_chunking_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resetLayoutBasedChunkingConfig"></a>

```python
def reset_layout_based_chunking_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.layoutBasedChunkingConfig">layout_based_chunking_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.layoutBasedChunkingConfigInput">layout_based_chunking_config_input</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `layout_based_chunking_config`<sup>Required</sup> <a name="layout_based_chunking_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.layoutBasedChunkingConfig"></a>

```python
layout_based_chunking_config: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference</a>

---

##### `layout_based_chunking_config_input`<sup>Optional</sup> <a name="layout_based_chunking_config_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.layoutBasedChunkingConfigInput"></a>

```python
layout_based_chunking_config_input: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resetUseNativeText">reset_use_native_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_native_text` <a name="reset_use_native_text" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resetUseNativeText"></a>

```python
def reset_use_native_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.useNativeTextInput">use_native_text_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.useNativeText">use_native_text</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `use_native_text_input`<sup>Optional</sup> <a name="use_native_text_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.useNativeTextInput"></a>

```python
use_native_text_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_native_text`<sup>Required</sup> <a name="use_native_text" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.useNativeText"></a>

```python
use_native_text: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putDigitalParsingConfig">put_digital_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putLayoutParsingConfig">put_layout_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putOcrParsingConfig">put_ocr_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetDigitalParsingConfig">reset_digital_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetLayoutParsingConfig">reset_layout_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetOcrParsingConfig">reset_ocr_parsing_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_digital_parsing_config` <a name="put_digital_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putDigitalParsingConfig"></a>

```python
def put_digital_parsing_config() -> None
```

##### `put_layout_parsing_config` <a name="put_layout_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putLayoutParsingConfig"></a>

```python
def put_layout_parsing_config() -> None
```

##### `put_ocr_parsing_config` <a name="put_ocr_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putOcrParsingConfig"></a>

```python
def put_ocr_parsing_config(
  use_native_text: typing.Union[bool, IResolvable] = None
) -> None
```

###### `use_native_text`<sup>Optional</sup> <a name="use_native_text" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putOcrParsingConfig.parameter.useNativeText"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, will use native text instead of OCR text on pages containing native text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#use_native_text DiscoveryEngineDataStore#use_native_text}

---

##### `reset_digital_parsing_config` <a name="reset_digital_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetDigitalParsingConfig"></a>

```python
def reset_digital_parsing_config() -> None
```

##### `reset_layout_parsing_config` <a name="reset_layout_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetLayoutParsingConfig"></a>

```python
def reset_layout_parsing_config() -> None
```

##### `reset_ocr_parsing_config` <a name="reset_ocr_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetOcrParsingConfig"></a>

```python
def reset_ocr_parsing_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.digitalParsingConfig">digital_parsing_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.layoutParsingConfig">layout_parsing_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.ocrParsingConfig">ocr_parsing_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.digitalParsingConfigInput">digital_parsing_config_input</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.layoutParsingConfigInput">layout_parsing_config_input</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.ocrParsingConfigInput">ocr_parsing_config_input</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `digital_parsing_config`<sup>Required</sup> <a name="digital_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.digitalParsingConfig"></a>

```python
digital_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference</a>

---

##### `layout_parsing_config`<sup>Required</sup> <a name="layout_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.layoutParsingConfig"></a>

```python
layout_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference</a>

---

##### `ocr_parsing_config`<sup>Required</sup> <a name="ocr_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.ocrParsingConfig"></a>

```python
ocr_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference</a>

---

##### `digital_parsing_config_input`<sup>Optional</sup> <a name="digital_parsing_config_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.digitalParsingConfigInput"></a>

```python
digital_parsing_config_input: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a>

---

##### `layout_parsing_config_input`<sup>Optional</sup> <a name="layout_parsing_config_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.layoutParsingConfigInput"></a>

```python
layout_parsing_config_input: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a>

---

##### `ocr_parsing_config_input`<sup>Optional</sup> <a name="ocr_parsing_config_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.ocrParsingConfigInput"></a>

```python
ocr_parsing_config_input: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putChunkingConfig">put_chunking_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putDefaultParsingConfig">put_default_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putParsingConfigOverrides">put_parsing_config_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetChunkingConfig">reset_chunking_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetDefaultParsingConfig">reset_default_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetParsingConfigOverrides">reset_parsing_config_overrides</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_chunking_config` <a name="put_chunking_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putChunkingConfig"></a>

```python
def put_chunking_config(
  layout_based_chunking_config: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig = None
) -> None
```

###### `layout_based_chunking_config`<sup>Optional</sup> <a name="layout_based_chunking_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putChunkingConfig.parameter.layoutBasedChunkingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a>

layout_based_chunking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#layout_based_chunking_config DiscoveryEngineDataStore#layout_based_chunking_config}

---

##### `put_default_parsing_config` <a name="put_default_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putDefaultParsingConfig"></a>

```python
def put_default_parsing_config(
  digital_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig = None,
  layout_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig = None,
  ocr_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig = None
) -> None
```

###### `digital_parsing_config`<sup>Optional</sup> <a name="digital_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putDefaultParsingConfig.parameter.digitalParsingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a>

digital_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#digital_parsing_config DiscoveryEngineDataStore#digital_parsing_config}

---

###### `layout_parsing_config`<sup>Optional</sup> <a name="layout_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putDefaultParsingConfig.parameter.layoutParsingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a>

layout_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#layout_parsing_config DiscoveryEngineDataStore#layout_parsing_config}

---

###### `ocr_parsing_config`<sup>Optional</sup> <a name="ocr_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putDefaultParsingConfig.parameter.ocrParsingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a>

ocr_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#ocr_parsing_config DiscoveryEngineDataStore#ocr_parsing_config}

---

##### `put_parsing_config_overrides` <a name="put_parsing_config_overrides" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putParsingConfigOverrides"></a>

```python
def put_parsing_config_overrides(
  value: typing.Union[IResolvable, typing.List[DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putParsingConfigOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>]]

---

##### `reset_chunking_config` <a name="reset_chunking_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetChunkingConfig"></a>

```python
def reset_chunking_config() -> None
```

##### `reset_default_parsing_config` <a name="reset_default_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetDefaultParsingConfig"></a>

```python
def reset_default_parsing_config() -> None
```

##### `reset_parsing_config_overrides` <a name="reset_parsing_config_overrides" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetParsingConfigOverrides"></a>

```python
def reset_parsing_config_overrides() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.chunkingConfig">chunking_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.defaultParsingConfig">default_parsing_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.parsingConfigOverrides">parsing_config_overrides</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.chunkingConfigInput">chunking_config_input</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.defaultParsingConfigInput">default_parsing_config_input</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.parsingConfigOverridesInput">parsing_config_overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chunking_config`<sup>Required</sup> <a name="chunking_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.chunkingConfig"></a>

```python
chunking_config: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference</a>

---

##### `default_parsing_config`<sup>Required</sup> <a name="default_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.defaultParsingConfig"></a>

```python
default_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parsing_config_overrides`<sup>Required</sup> <a name="parsing_config_overrides" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.parsingConfigOverrides"></a>

```python
parsing_config_overrides: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList</a>

---

##### `chunking_config_input`<sup>Optional</sup> <a name="chunking_config_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.chunkingConfigInput"></a>

```python
chunking_config_input: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a>

---

##### `default_parsing_config_input`<sup>Optional</sup> <a name="default_parsing_config_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.defaultParsingConfigInput"></a>

```python
default_parsing_config_input: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a>

---

##### `parsing_config_overrides_input`<sup>Optional</sup> <a name="parsing_config_overrides_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.parsingConfigOverridesInput"></a>

```python
parsing_config_overrides_input: typing.Union[IResolvable, typing.List[DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineDataStoreDocumentProcessingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>]]

---


### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resetUseNativeText">reset_use_native_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_native_text` <a name="reset_use_native_text" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resetUseNativeText"></a>

```python
def reset_use_native_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.useNativeTextInput">use_native_text_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.useNativeText">use_native_text</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `use_native_text_input`<sup>Optional</sup> <a name="use_native_text_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.useNativeTextInput"></a>

```python
use_native_text_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_native_text`<sup>Required</sup> <a name="use_native_text" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.useNativeText"></a>

```python
use_native_text: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putDigitalParsingConfig">put_digital_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putLayoutParsingConfig">put_layout_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putOcrParsingConfig">put_ocr_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetDigitalParsingConfig">reset_digital_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetLayoutParsingConfig">reset_layout_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetOcrParsingConfig">reset_ocr_parsing_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_digital_parsing_config` <a name="put_digital_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putDigitalParsingConfig"></a>

```python
def put_digital_parsing_config() -> None
```

##### `put_layout_parsing_config` <a name="put_layout_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putLayoutParsingConfig"></a>

```python
def put_layout_parsing_config() -> None
```

##### `put_ocr_parsing_config` <a name="put_ocr_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putOcrParsingConfig"></a>

```python
def put_ocr_parsing_config(
  use_native_text: typing.Union[bool, IResolvable] = None
) -> None
```

###### `use_native_text`<sup>Optional</sup> <a name="use_native_text" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putOcrParsingConfig.parameter.useNativeText"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, will use native text instead of OCR text on pages containing native text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/discovery_engine_data_store#use_native_text DiscoveryEngineDataStore#use_native_text}

---

##### `reset_digital_parsing_config` <a name="reset_digital_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetDigitalParsingConfig"></a>

```python
def reset_digital_parsing_config() -> None
```

##### `reset_layout_parsing_config` <a name="reset_layout_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetLayoutParsingConfig"></a>

```python
def reset_layout_parsing_config() -> None
```

##### `reset_ocr_parsing_config` <a name="reset_ocr_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetOcrParsingConfig"></a>

```python
def reset_ocr_parsing_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.digitalParsingConfig">digital_parsing_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.layoutParsingConfig">layout_parsing_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.ocrParsingConfig">ocr_parsing_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.digitalParsingConfigInput">digital_parsing_config_input</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fileTypeInput">file_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.layoutParsingConfigInput">layout_parsing_config_input</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.ocrParsingConfigInput">ocr_parsing_config_input</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fileType">file_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `digital_parsing_config`<sup>Required</sup> <a name="digital_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.digitalParsingConfig"></a>

```python
digital_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference</a>

---

##### `layout_parsing_config`<sup>Required</sup> <a name="layout_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.layoutParsingConfig"></a>

```python
layout_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference</a>

---

##### `ocr_parsing_config`<sup>Required</sup> <a name="ocr_parsing_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.ocrParsingConfig"></a>

```python
ocr_parsing_config: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference</a>

---

##### `digital_parsing_config_input`<sup>Optional</sup> <a name="digital_parsing_config_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.digitalParsingConfigInput"></a>

```python
digital_parsing_config_input: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a>

---

##### `file_type_input`<sup>Optional</sup> <a name="file_type_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fileTypeInput"></a>

```python
file_type_input: str
```

- *Type:* str

---

##### `layout_parsing_config_input`<sup>Optional</sup> <a name="layout_parsing_config_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.layoutParsingConfigInput"></a>

```python
layout_parsing_config_input: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a>

---

##### `ocr_parsing_config_input`<sup>Optional</sup> <a name="ocr_parsing_config_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.ocrParsingConfigInput"></a>

```python
ocr_parsing_config_input: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a>

---

##### `file_type`<sup>Required</sup> <a name="file_type" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fileType"></a>

```python
file_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>]

---


### DiscoveryEngineDataStoreTimeoutsOutputReference <a name="DiscoveryEngineDataStoreTimeoutsOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DiscoveryEngineDataStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>]

---



