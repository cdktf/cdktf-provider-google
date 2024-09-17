# `dataCatalogTaxonomy` Submodule <a name="`dataCatalogTaxonomy` Submodule" id="@cdktf/provider-google.dataCatalogTaxonomy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCatalogTaxonomy <a name="DataCatalogTaxonomy" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy google_data_catalog_taxonomy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_taxonomy

dataCatalogTaxonomy.DataCatalogTaxonomy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  activated_policy_types: typing.List[str] = None,
  description: str = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: DataCatalogTaxonomyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User defined name of this taxonomy. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.activatedPolicyTypes">activated_policy_types</a></code> | <code>typing.List[str]</code> | A list of policy types that are activated for this taxonomy. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of this taxonomy. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#id DataCatalogTaxonomy#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#project DataCatalogTaxonomy#project}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.region">region</a></code> | <code>str</code> | Taxonomy location region. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts">DataCatalogTaxonomyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.displayName"></a>

- *Type:* str

User defined name of this taxonomy.

The taxonomy display name must be unique within an organization.
It must: contain only unicode letters, numbers, underscores, dashes
and spaces; not start or end with spaces; and be at most 200 bytes
long when encoded in UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#display_name DataCatalogTaxonomy#display_name}

---

##### `activated_policy_types`<sup>Optional</sup> <a name="activated_policy_types" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.activatedPolicyTypes"></a>

- *Type:* typing.List[str]

A list of policy types that are activated for this taxonomy.

If not set,
defaults to an empty list. Possible values: ["POLICY_TYPE_UNSPECIFIED", "FINE_GRAINED_ACCESS_CONTROL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#activated_policy_types DataCatalogTaxonomy#activated_policy_types}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.description"></a>

- *Type:* str

Description of this taxonomy.

It must: contain only unicode characters,
tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes
long when encoded in UTF-8. If not set, defaults to an empty description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#description DataCatalogTaxonomy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#id DataCatalogTaxonomy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#project DataCatalogTaxonomy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.region"></a>

- *Type:* str

Taxonomy location region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#region DataCatalogTaxonomy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts">DataCatalogTaxonomyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#timeouts DataCatalogTaxonomy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetActivatedPolicyTypes">reset_activated_policy_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#create DataCatalogTaxonomy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#delete DataCatalogTaxonomy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#update DataCatalogTaxonomy#update}.

---

##### `reset_activated_policy_types` <a name="reset_activated_policy_types" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetActivatedPolicyTypes"></a>

```python
def reset_activated_policy_types() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCatalogTaxonomy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_taxonomy

dataCatalogTaxonomy.DataCatalogTaxonomy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_taxonomy

dataCatalogTaxonomy.DataCatalogTaxonomy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_taxonomy

dataCatalogTaxonomy.DataCatalogTaxonomy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_taxonomy

dataCatalogTaxonomy.DataCatalogTaxonomy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCatalogTaxonomy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCatalogTaxonomy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCatalogTaxonomy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCatalogTaxonomy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference">DataCatalogTaxonomyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.activatedPolicyTypesInput">activated_policy_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts">DataCatalogTaxonomyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.activatedPolicyTypes">activated_policy_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.timeouts"></a>

```python
timeouts: DataCatalogTaxonomyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference">DataCatalogTaxonomyTimeoutsOutputReference</a>

---

##### `activated_policy_types_input`<sup>Optional</sup> <a name="activated_policy_types_input" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.activatedPolicyTypesInput"></a>

```python
activated_policy_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataCatalogTaxonomyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts">DataCatalogTaxonomyTimeouts</a>]

---

##### `activated_policy_types`<sup>Required</sup> <a name="activated_policy_types" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.activatedPolicyTypes"></a>

```python
activated_policy_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCatalogTaxonomyConfig <a name="DataCatalogTaxonomyConfig" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_taxonomy

dataCatalogTaxonomy.DataCatalogTaxonomyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  activated_policy_types: typing.List[str] = None,
  description: str = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: DataCatalogTaxonomyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.displayName">display_name</a></code> | <code>str</code> | User defined name of this taxonomy. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.activatedPolicyTypes">activated_policy_types</a></code> | <code>typing.List[str]</code> | A list of policy types that are activated for this taxonomy. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.description">description</a></code> | <code>str</code> | Description of this taxonomy. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#id DataCatalogTaxonomy#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#project DataCatalogTaxonomy#project}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.region">region</a></code> | <code>str</code> | Taxonomy location region. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts">DataCatalogTaxonomyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User defined name of this taxonomy.

The taxonomy display name must be unique within an organization.
It must: contain only unicode letters, numbers, underscores, dashes
and spaces; not start or end with spaces; and be at most 200 bytes
long when encoded in UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#display_name DataCatalogTaxonomy#display_name}

---

##### `activated_policy_types`<sup>Optional</sup> <a name="activated_policy_types" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.activatedPolicyTypes"></a>

```python
activated_policy_types: typing.List[str]
```

- *Type:* typing.List[str]

A list of policy types that are activated for this taxonomy.

If not set,
defaults to an empty list. Possible values: ["POLICY_TYPE_UNSPECIFIED", "FINE_GRAINED_ACCESS_CONTROL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#activated_policy_types DataCatalogTaxonomy#activated_policy_types}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of this taxonomy.

It must: contain only unicode characters,
tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes
long when encoded in UTF-8. If not set, defaults to an empty description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#description DataCatalogTaxonomy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#id DataCatalogTaxonomy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#project DataCatalogTaxonomy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Taxonomy location region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#region DataCatalogTaxonomy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.timeouts"></a>

```python
timeouts: DataCatalogTaxonomyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts">DataCatalogTaxonomyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#timeouts DataCatalogTaxonomy#timeouts}

---

### DataCatalogTaxonomyTimeouts <a name="DataCatalogTaxonomyTimeouts" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_taxonomy

dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#create DataCatalogTaxonomy#create}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#delete DataCatalogTaxonomy#delete}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#update DataCatalogTaxonomy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#create DataCatalogTaxonomy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#delete DataCatalogTaxonomy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/data_catalog_taxonomy#update DataCatalogTaxonomy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCatalogTaxonomyTimeoutsOutputReference <a name="DataCatalogTaxonomyTimeoutsOutputReference" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_taxonomy

dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts">DataCatalogTaxonomyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCatalogTaxonomyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts">DataCatalogTaxonomyTimeouts</a>]

---



