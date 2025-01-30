# `sccV2OrganizationSccBigQueryExport` Submodule <a name="`sccV2OrganizationSccBigQueryExport` Submodule" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccV2OrganizationSccBigQueryExport <a name="SccV2OrganizationSccBigQueryExport" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export google_scc_v2_organization_scc_big_query_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_v2_organization_scc_big_query_export

sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  big_query_export_id: str,
  organization: str,
  dataset: str = None,
  description: str = None,
  filter: str = None,
  id: str = None,
  location: str = None,
  name: str = None,
  timeouts: SccV2OrganizationSccBigQueryExportTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.bigQueryExportId">big_query_export_id</a></code> | <code>str</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The organization whose Cloud Security Command Center the Big Query Export Config lives in. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.dataset">dataset</a></code> | <code>str</code> | The dataset to write findings' updates to. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#id SccV2OrganizationSccBigQueryExport#id}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.location">location</a></code> | <code>str</code> | location Id is provided by organization. If not provided, Use global as default. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of this export, in the format 'organizations/{{organization}}/locations/{{location}}/bigQueryExports/{{big_query_export_id}}'. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeouts">SccV2OrganizationSccBigQueryExportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `big_query_export_id`<sup>Required</sup> <a name="big_query_export_id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.bigQueryExportId"></a>

- *Type:* str

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#big_query_export_id SccV2OrganizationSccBigQueryExport#big_query_export_id}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.organization"></a>

- *Type:* str

The organization whose Cloud Security Command Center the Big Query Export Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#organization SccV2OrganizationSccBigQueryExport#organization}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.dataset"></a>

- *Type:* str

The dataset to write findings' updates to.

Its format is "projects/[projectId]/datasets/[bigquery_dataset_id]".
BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#dataset SccV2OrganizationSccBigQueryExport#dataset}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.description"></a>

- *Type:* str

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#description SccV2OrganizationSccBigQueryExport#description}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.filter"></a>

- *Type:* str

Expression that defines the filter to apply across create/update events of findings.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* > , <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#filter SccV2OrganizationSccBigQueryExport#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#id SccV2OrganizationSccBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.location"></a>

- *Type:* str

location Id is provided by organization. If not provided, Use global as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#location SccV2OrganizationSccBigQueryExport#location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.name"></a>

- *Type:* str

The resource name of this export, in the format 'organizations/{{organization}}/locations/{{location}}/bigQueryExports/{{big_query_export_id}}'.

This field is provided in responses, and is ignored when provided in create requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#name SccV2OrganizationSccBigQueryExport#name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeouts">SccV2OrganizationSccBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#timeouts SccV2OrganizationSccBigQueryExport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.resetDataset">reset_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#create SccV2OrganizationSccBigQueryExport#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#delete SccV2OrganizationSccBigQueryExport#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#update SccV2OrganizationSccBigQueryExport#update}.

---

##### `reset_dataset` <a name="reset_dataset" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.resetDataset"></a>

```python
def reset_dataset() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SccV2OrganizationSccBigQueryExport resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import scc_v2_organization_scc_big_query_export

sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import scc_v2_organization_scc_big_query_export

sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import scc_v2_organization_scc_big_query_export

sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import scc_v2_organization_scc_big_query_export

sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SccV2OrganizationSccBigQueryExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SccV2OrganizationSccBigQueryExport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SccV2OrganizationSccBigQueryExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SccV2OrganizationSccBigQueryExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.mostRecentEditor">most_recent_editor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference">SccV2OrganizationSccBigQueryExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.bigQueryExportIdInput">big_query_export_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.datasetInput">dataset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeouts">SccV2OrganizationSccBigQueryExportTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.bigQueryExportId">big_query_export_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.organization">organization</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `most_recent_editor`<sup>Required</sup> <a name="most_recent_editor" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.mostRecentEditor"></a>

```python
most_recent_editor: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.timeouts"></a>

```python
timeouts: SccV2OrganizationSccBigQueryExportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference">SccV2OrganizationSccBigQueryExportTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `big_query_export_id_input`<sup>Optional</sup> <a name="big_query_export_id_input" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.bigQueryExportIdInput"></a>

```python
big_query_export_id_input: str
```

- *Type:* str

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.datasetInput"></a>

```python
dataset_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SccV2OrganizationSccBigQueryExportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeouts">SccV2OrganizationSccBigQueryExportTimeouts</a>]

---

##### `big_query_export_id`<sup>Required</sup> <a name="big_query_export_id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.bigQueryExportId"></a>

```python
big_query_export_id: str
```

- *Type:* str

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SccV2OrganizationSccBigQueryExportConfig <a name="SccV2OrganizationSccBigQueryExportConfig" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_v2_organization_scc_big_query_export

sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  big_query_export_id: str,
  organization: str,
  dataset: str = None,
  description: str = None,
  filter: str = None,
  id: str = None,
  location: str = None,
  name: str = None,
  timeouts: SccV2OrganizationSccBigQueryExportTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.bigQueryExportId">big_query_export_id</a></code> | <code>str</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.organization">organization</a></code> | <code>str</code> | The organization whose Cloud Security Command Center the Big Query Export Config lives in. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.dataset">dataset</a></code> | <code>str</code> | The dataset to write findings' updates to. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.description">description</a></code> | <code>str</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.filter">filter</a></code> | <code>str</code> | Expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#id SccV2OrganizationSccBigQueryExport#id}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.location">location</a></code> | <code>str</code> | location Id is provided by organization. If not provided, Use global as default. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.name">name</a></code> | <code>str</code> | The resource name of this export, in the format 'organizations/{{organization}}/locations/{{location}}/bigQueryExports/{{big_query_export_id}}'. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeouts">SccV2OrganizationSccBigQueryExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `big_query_export_id`<sup>Required</sup> <a name="big_query_export_id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.bigQueryExportId"></a>

```python
big_query_export_id: str
```

- *Type:* str

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#big_query_export_id SccV2OrganizationSccBigQueryExport#big_query_export_id}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The organization whose Cloud Security Command Center the Big Query Export Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#organization SccV2OrganizationSccBigQueryExport#organization}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

The dataset to write findings' updates to.

Its format is "projects/[projectId]/datasets/[bigquery_dataset_id]".
BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#dataset SccV2OrganizationSccBigQueryExport#dataset}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#description SccV2OrganizationSccBigQueryExport#description}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Expression that defines the filter to apply across create/update events of findings.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* > , <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#filter SccV2OrganizationSccBigQueryExport#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#id SccV2OrganizationSccBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.location"></a>

```python
location: str
```

- *Type:* str

location Id is provided by organization. If not provided, Use global as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#location SccV2OrganizationSccBigQueryExport#location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of this export, in the format 'organizations/{{organization}}/locations/{{location}}/bigQueryExports/{{big_query_export_id}}'.

This field is provided in responses, and is ignored when provided in create requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#name SccV2OrganizationSccBigQueryExport#name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportConfig.property.timeouts"></a>

```python
timeouts: SccV2OrganizationSccBigQueryExportTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeouts">SccV2OrganizationSccBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#timeouts SccV2OrganizationSccBigQueryExport#timeouts}

---

### SccV2OrganizationSccBigQueryExportTimeouts <a name="SccV2OrganizationSccBigQueryExportTimeouts" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_v2_organization_scc_big_query_export

sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#create SccV2OrganizationSccBigQueryExport#create}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#delete SccV2OrganizationSccBigQueryExport#delete}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#update SccV2OrganizationSccBigQueryExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#create SccV2OrganizationSccBigQueryExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#delete SccV2OrganizationSccBigQueryExport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.18.1/docs/resources/scc_v2_organization_scc_big_query_export#update SccV2OrganizationSccBigQueryExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccV2OrganizationSccBigQueryExportTimeoutsOutputReference <a name="SccV2OrganizationSccBigQueryExportTimeoutsOutputReference" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_v2_organization_scc_big_query_export

sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeouts">SccV2OrganizationSccBigQueryExportTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SccV2OrganizationSccBigQueryExportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccV2OrganizationSccBigQueryExport.SccV2OrganizationSccBigQueryExportTimeouts">SccV2OrganizationSccBigQueryExportTimeouts</a>]

---



