# `bigqueryRowAccessPolicy` Submodule <a name="`bigqueryRowAccessPolicy` Submodule" id="@cdktf/provider-google.bigqueryRowAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryRowAccessPolicy <a name="BigqueryRowAccessPolicy" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy google_bigquery_row_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_row_access_policy

bigqueryRowAccessPolicy.BigqueryRowAccessPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dataset_id: str,
  filter_predicate: str,
  policy_id: str,
  table_id: str,
  grantees: typing.List[str] = None,
  id: str = None,
  project: str = None,
  timeouts: BigqueryRowAccessPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this row access policy. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.filterPredicate">filter_predicate</a></code> | <code>str</code> | A SQL boolean expression that represents the rows defined by this row access policy, similar to the boolean expression in a WHERE clause of a SELECT query on a table. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | The ID of the row access policy. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.tableId">table_id</a></code> | <code>str</code> | The ID of the table containing this row access policy. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.grantees">grantees</a></code> | <code>typing.List[str]</code> | Input only. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#id BigqueryRowAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#project BigqueryRowAccessPolicy#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts">BigqueryRowAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this row access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#dataset_id BigqueryRowAccessPolicy#dataset_id}

---

##### `filter_predicate`<sup>Required</sup> <a name="filter_predicate" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.filterPredicate"></a>

- *Type:* str

A SQL boolean expression that represents the rows defined by this row access policy, similar to the boolean expression in a WHERE clause of a SELECT query on a table.

References to other tables, routines, and temporary functions are not
supported.

Examples: region="EU"
date_field = CAST('2019-9-27' as DATE)
nullable_field is not NULL
numeric_field BETWEEN 1.0 AND 5.0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#filter_predicate BigqueryRowAccessPolicy#filter_predicate}

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.policyId"></a>

- *Type:* str

The ID of the row access policy.

The ID must contain only
letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum
length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#policy_id BigqueryRowAccessPolicy#policy_id}

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.tableId"></a>

- *Type:* str

The ID of the table containing this row access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#table_id BigqueryRowAccessPolicy#table_id}

---

##### `grantees`<sup>Optional</sup> <a name="grantees" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.grantees"></a>

- *Type:* typing.List[str]

Input only.

The optional list of iam_member users or groups that specifies the initial
members that the row-level access policy should be created with.

grantees types:

* "user:alice@example.com": An email address that represents a specific
  Google account.
* "serviceAccount:my-other-app@appspot.gserviceaccount.com": An email
  address that represents a service account.
* "group:admins@example.com": An email address that represents a Google
  group.
* "domain:example.com":The Google Workspace domain (primary) that
  represents all the users of that domain.
* "allAuthenticatedUsers": A special identifier that represents all service
  accounts and all users on the internet who have authenticated with a Google
  Account. This identifier includes accounts that aren't connected to a
  Google Workspace or Cloud Identity domain, such as personal Gmail accounts.
  Users who aren't authenticated, such as anonymous visitors, aren't
  included.
* "allUsers":A special identifier that represents anyone who is on
  the internet, including authenticated and unauthenticated users. Because
  BigQuery requires authentication before a user can access the service,
  allUsers includes only authenticated users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#grantees BigqueryRowAccessPolicy#grantees}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#id BigqueryRowAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#project BigqueryRowAccessPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts">BigqueryRowAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#timeouts BigqueryRowAccessPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetGrantees">reset_grantees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#create BigqueryRowAccessPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#delete BigqueryRowAccessPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#update BigqueryRowAccessPolicy#update}.

---

##### `reset_grantees` <a name="reset_grantees" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetGrantees"></a>

```python
def reset_grantees() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BigqueryRowAccessPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import bigquery_row_access_policy

bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import bigquery_row_access_policy

bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import bigquery_row_access_policy

bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import bigquery_row_access_policy

bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BigqueryRowAccessPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BigqueryRowAccessPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BigqueryRowAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryRowAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference">BigqueryRowAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.filterPredicateInput">filter_predicate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.granteesInput">grantees_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts">BigqueryRowAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.filterPredicate">filter_predicate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.grantees">grantees</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.timeouts"></a>

```python
timeouts: BigqueryRowAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference">BigqueryRowAccessPolicyTimeoutsOutputReference</a>

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `filter_predicate_input`<sup>Optional</sup> <a name="filter_predicate_input" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.filterPredicateInput"></a>

```python
filter_predicate_input: str
```

- *Type:* str

---

##### `grantees_input`<sup>Optional</sup> <a name="grantees_input" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.granteesInput"></a>

```python
grantees_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BigqueryRowAccessPolicyTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts">BigqueryRowAccessPolicyTimeouts</a>

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `filter_predicate`<sup>Required</sup> <a name="filter_predicate" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.filterPredicate"></a>

```python
filter_predicate: str
```

- *Type:* str

---

##### `grantees`<sup>Required</sup> <a name="grantees" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.grantees"></a>

```python
grantees: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryRowAccessPolicyConfig <a name="BigqueryRowAccessPolicyConfig" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_row_access_policy

bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dataset_id: str,
  filter_predicate: str,
  policy_id: str,
  table_id: str,
  grantees: typing.List[str] = None,
  id: str = None,
  project: str = None,
  timeouts: BigqueryRowAccessPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this row access policy. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.filterPredicate">filter_predicate</a></code> | <code>str</code> | A SQL boolean expression that represents the rows defined by this row access policy, similar to the boolean expression in a WHERE clause of a SELECT query on a table. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.policyId">policy_id</a></code> | <code>str</code> | The ID of the row access policy. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.tableId">table_id</a></code> | <code>str</code> | The ID of the table containing this row access policy. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.grantees">grantees</a></code> | <code>typing.List[str]</code> | Input only. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#id BigqueryRowAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#project BigqueryRowAccessPolicy#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts">BigqueryRowAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this row access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#dataset_id BigqueryRowAccessPolicy#dataset_id}

---

##### `filter_predicate`<sup>Required</sup> <a name="filter_predicate" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.filterPredicate"></a>

```python
filter_predicate: str
```

- *Type:* str

A SQL boolean expression that represents the rows defined by this row access policy, similar to the boolean expression in a WHERE clause of a SELECT query on a table.

References to other tables, routines, and temporary functions are not
supported.

Examples: region="EU"
date_field = CAST('2019-9-27' as DATE)
nullable_field is not NULL
numeric_field BETWEEN 1.0 AND 5.0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#filter_predicate BigqueryRowAccessPolicy#filter_predicate}

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

The ID of the row access policy.

The ID must contain only
letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum
length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#policy_id BigqueryRowAccessPolicy#policy_id}

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

The ID of the table containing this row access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#table_id BigqueryRowAccessPolicy#table_id}

---

##### `grantees`<sup>Optional</sup> <a name="grantees" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.grantees"></a>

```python
grantees: typing.List[str]
```

- *Type:* typing.List[str]

Input only.

The optional list of iam_member users or groups that specifies the initial
members that the row-level access policy should be created with.

grantees types:

* "user:alice@example.com": An email address that represents a specific
  Google account.
* "serviceAccount:my-other-app@appspot.gserviceaccount.com": An email
  address that represents a service account.
* "group:admins@example.com": An email address that represents a Google
  group.
* "domain:example.com":The Google Workspace domain (primary) that
  represents all the users of that domain.
* "allAuthenticatedUsers": A special identifier that represents all service
  accounts and all users on the internet who have authenticated with a Google
  Account. This identifier includes accounts that aren't connected to a
  Google Workspace or Cloud Identity domain, such as personal Gmail accounts.
  Users who aren't authenticated, such as anonymous visitors, aren't
  included.
* "allUsers":A special identifier that represents anyone who is on
  the internet, including authenticated and unauthenticated users. Because
  BigQuery requires authentication before a user can access the service,
  allUsers includes only authenticated users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#grantees BigqueryRowAccessPolicy#grantees}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#id BigqueryRowAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#project BigqueryRowAccessPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.timeouts"></a>

```python
timeouts: BigqueryRowAccessPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts">BigqueryRowAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#timeouts BigqueryRowAccessPolicy#timeouts}

---

### BigqueryRowAccessPolicyTimeouts <a name="BigqueryRowAccessPolicyTimeouts" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_row_access_policy

bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#create BigqueryRowAccessPolicy#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#delete BigqueryRowAccessPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#update BigqueryRowAccessPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#create BigqueryRowAccessPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#delete BigqueryRowAccessPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_row_access_policy#update BigqueryRowAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryRowAccessPolicyTimeoutsOutputReference <a name="BigqueryRowAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_row_access_policy

bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts">BigqueryRowAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BigqueryRowAccessPolicyTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts">BigqueryRowAccessPolicyTimeouts</a>

---



