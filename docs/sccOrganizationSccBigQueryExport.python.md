# `sccOrganizationSccBigQueryExport` Submodule <a name="`sccOrganizationSccBigQueryExport` Submodule" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccOrganizationSccBigQueryExport <a name="SccOrganizationSccBigQueryExport" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export google_scc_organization_scc_big_query_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_organization_scc_big_query_export

sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport(
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
  timeouts: SccOrganizationSccBigQueryExportTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.bigQueryExportId">big_query_export_id</a></code> | <code>str</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The organization whose Cloud Security Command Center the Big Query Export Config lives in. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.dataset">dataset</a></code> | <code>str</code> | The dataset to write findings' updates to. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#id SccOrganizationSccBigQueryExport#id}. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts">SccOrganizationSccBigQueryExportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `big_query_export_id`<sup>Required</sup> <a name="big_query_export_id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.bigQueryExportId"></a>

- *Type:* str

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#big_query_export_id SccOrganizationSccBigQueryExport#big_query_export_id}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.organization"></a>

- *Type:* str

The organization whose Cloud Security Command Center the Big Query Export Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#organization SccOrganizationSccBigQueryExport#organization}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.dataset"></a>

- *Type:* str

The dataset to write findings' updates to.

Its format is "projects/[projectId]/datasets/[bigquery_dataset_id]".
BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#dataset SccOrganizationSccBigQueryExport#dataset}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.description"></a>

- *Type:* str

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#description SccOrganizationSccBigQueryExport#description}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.filter"></a>

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
* >, <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#filter SccOrganizationSccBigQueryExport#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#id SccOrganizationSccBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts">SccOrganizationSccBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#timeouts SccOrganizationSccBigQueryExport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetDataset">reset_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#create SccOrganizationSccBigQueryExport#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#delete SccOrganizationSccBigQueryExport#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#update SccOrganizationSccBigQueryExport#update}.

---

##### `reset_dataset` <a name="reset_dataset" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetDataset"></a>

```python
def reset_dataset() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SccOrganizationSccBigQueryExport resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import scc_organization_scc_big_query_export

sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import scc_organization_scc_big_query_export

sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import scc_organization_scc_big_query_export

sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import scc_organization_scc_big_query_export

sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SccOrganizationSccBigQueryExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SccOrganizationSccBigQueryExport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SccOrganizationSccBigQueryExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SccOrganizationSccBigQueryExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.mostRecentEditor">most_recent_editor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference">SccOrganizationSccBigQueryExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.bigQueryExportIdInput">big_query_export_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.datasetInput">dataset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts">SccOrganizationSccBigQueryExportTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.bigQueryExportId">big_query_export_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.organization">organization</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `most_recent_editor`<sup>Required</sup> <a name="most_recent_editor" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.mostRecentEditor"></a>

```python
most_recent_editor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.timeouts"></a>

```python
timeouts: SccOrganizationSccBigQueryExportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference">SccOrganizationSccBigQueryExportTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `big_query_export_id_input`<sup>Optional</sup> <a name="big_query_export_id_input" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.bigQueryExportIdInput"></a>

```python
big_query_export_id_input: str
```

- *Type:* str

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.datasetInput"></a>

```python
dataset_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SccOrganizationSccBigQueryExportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts">SccOrganizationSccBigQueryExportTimeouts</a>]

---

##### `big_query_export_id`<sup>Required</sup> <a name="big_query_export_id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.bigQueryExportId"></a>

```python
big_query_export_id: str
```

- *Type:* str

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SccOrganizationSccBigQueryExportConfig <a name="SccOrganizationSccBigQueryExportConfig" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_organization_scc_big_query_export

sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig(
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
  timeouts: SccOrganizationSccBigQueryExportTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.bigQueryExportId">big_query_export_id</a></code> | <code>str</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.organization">organization</a></code> | <code>str</code> | The organization whose Cloud Security Command Center the Big Query Export Config lives in. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.dataset">dataset</a></code> | <code>str</code> | The dataset to write findings' updates to. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.description">description</a></code> | <code>str</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.filter">filter</a></code> | <code>str</code> | Expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#id SccOrganizationSccBigQueryExport#id}. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts">SccOrganizationSccBigQueryExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `big_query_export_id`<sup>Required</sup> <a name="big_query_export_id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.bigQueryExportId"></a>

```python
big_query_export_id: str
```

- *Type:* str

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#big_query_export_id SccOrganizationSccBigQueryExport#big_query_export_id}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The organization whose Cloud Security Command Center the Big Query Export Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#organization SccOrganizationSccBigQueryExport#organization}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

The dataset to write findings' updates to.

Its format is "projects/[projectId]/datasets/[bigquery_dataset_id]".
BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#dataset SccOrganizationSccBigQueryExport#dataset}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#description SccOrganizationSccBigQueryExport#description}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.filter"></a>

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
* >, <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#filter SccOrganizationSccBigQueryExport#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#id SccOrganizationSccBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.timeouts"></a>

```python
timeouts: SccOrganizationSccBigQueryExportTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts">SccOrganizationSccBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#timeouts SccOrganizationSccBigQueryExport#timeouts}

---

### SccOrganizationSccBigQueryExportTimeouts <a name="SccOrganizationSccBigQueryExportTimeouts" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_organization_scc_big_query_export

sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#create SccOrganizationSccBigQueryExport#create}. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#delete SccOrganizationSccBigQueryExport#delete}. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#update SccOrganizationSccBigQueryExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#create SccOrganizationSccBigQueryExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#delete SccOrganizationSccBigQueryExport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_organization_scc_big_query_export#update SccOrganizationSccBigQueryExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccOrganizationSccBigQueryExportTimeoutsOutputReference <a name="SccOrganizationSccBigQueryExportTimeoutsOutputReference" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_organization_scc_big_query_export

sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts">SccOrganizationSccBigQueryExportTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SccOrganizationSccBigQueryExportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts">SccOrganizationSccBigQueryExportTimeouts</a>]

---



