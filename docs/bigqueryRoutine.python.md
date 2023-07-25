# `google_bigquery_routine`

Refer to the Terraform Registory for docs: [`google_bigquery_routine`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine).

# `bigqueryRoutine` Submodule <a name="`bigqueryRoutine` Submodule" id="@cdktf/provider-google.bigqueryRoutine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryRoutine <a name="BigqueryRoutine" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine google_bigquery_routine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_routine

bigqueryRoutine.BigqueryRoutine(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset_id: str,
  definition_body: str,
  routine_id: str,
  arguments: typing.Union[IResolvable, typing.List[BigqueryRoutineArguments]] = None,
  description: str = None,
  determinism_level: str = None,
  id: str = None,
  imported_libraries: typing.List[str] = None,
  language: str = None,
  project: str = None,
  return_table_type: str = None,
  return_type: str = None,
  routine_type: str = None,
  timeouts: BigqueryRoutineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this routine. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.definitionBody">definition_body</a></code> | <code>str</code> | The body of the routine. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.routineId">routine_id</a></code> | <code>str</code> | The ID of the the routine. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.arguments">arguments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>]]</code> | arguments block. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the routine if defined. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.determinismLevel">determinism_level</a></code> | <code>str</code> | The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#id BigqueryRoutine#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.importedLibraries">imported_libraries</a></code> | <code>typing.List[str]</code> | Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.language">language</a></code> | <code>str</code> | The language of the routine. Possible values: ["SQL", "JAVASCRIPT"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#project BigqueryRoutine#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.returnTableType">return_table_type</a></code> | <code>str</code> | Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION". |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.returnType">return_type</a></code> | <code>str</code> | A JSON schema for the return type. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.routineType">routine_type</a></code> | <code>str</code> | The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this routine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#dataset_id BigqueryRoutine#dataset_id}

---

##### `definition_body`<sup>Required</sup> <a name="definition_body" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.definitionBody"></a>

- *Type:* str

The body of the routine.

For functions, this is the expression in the AS clause.
If language=SQL, it is the substring inside (but excluding) the parentheses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#definition_body BigqueryRoutine#definition_body}

---

##### `routine_id`<sup>Required</sup> <a name="routine_id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.routineId"></a>

- *Type:* str

The ID of the the routine.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#routine_id BigqueryRoutine#routine_id}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.arguments"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>]]

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#arguments BigqueryRoutine#arguments}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.description"></a>

- *Type:* str

The description of the routine if defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#description BigqueryRoutine#description}

---

##### `determinism_level`<sup>Optional</sup> <a name="determinism_level" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.determinismLevel"></a>

- *Type:* str

The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#determinism_level BigqueryRoutine#determinism_level}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#id BigqueryRoutine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imported_libraries`<sup>Optional</sup> <a name="imported_libraries" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.importedLibraries"></a>

- *Type:* typing.List[str]

Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#imported_libraries BigqueryRoutine#imported_libraries}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.language"></a>

- *Type:* str

The language of the routine. Possible values: ["SQL", "JAVASCRIPT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#language BigqueryRoutine#language}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#project BigqueryRoutine#project}.

---

##### `return_table_type`<sup>Optional</sup> <a name="return_table_type" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.returnTableType"></a>

- *Type:* str

Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".

If absent, the return table type is inferred from definitionBody at query time in each query
that references this routine. If present, then the columns in the evaluated table result will
be cast to match the column types specificed in return table type, at query time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#return_table_type BigqueryRoutine#return_table_type}

---

##### `return_type`<sup>Optional</sup> <a name="return_type" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.returnType"></a>

- *Type:* str

A JSON schema for the return type.

Optional if language = "SQL"; required otherwise.
If absent, the return type is inferred from definitionBody at query time in each query
that references this routine. If present, then the evaluated result will be cast to
the specified returned type at query time. ~>**NOTE**: Because this field expects a JSON
string, any changes to the string will create a diff, even if the JSON itself hasn't
changed. If the API returns a different value for the same schema, e.g. it switche
d the order of values or replaced STRUCT field type with RECORD field type, we currently
cannot suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#return_type BigqueryRoutine#return_type}

---

##### `routine_type`<sup>Optional</sup> <a name="routine_type" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.routineType"></a>

- *Type:* str

The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#routine_type BigqueryRoutine#routine_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#timeouts BigqueryRoutine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putArguments">put_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetDeterminismLevel">reset_determinism_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetImportedLibraries">reset_imported_libraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetLanguage">reset_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetReturnTableType">reset_return_table_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetReturnType">reset_return_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetRoutineType">reset_routine_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_arguments` <a name="put_arguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putArguments"></a>

```python
def put_arguments(
  value: typing.Union[IResolvable, typing.List[BigqueryRoutineArguments]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putArguments.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#create BigqueryRoutine#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#delete BigqueryRoutine#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#update BigqueryRoutine#update}.

---

##### `reset_arguments` <a name="reset_arguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_determinism_level` <a name="reset_determinism_level" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetDeterminismLevel"></a>

```python
def reset_determinism_level() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_imported_libraries` <a name="reset_imported_libraries" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetImportedLibraries"></a>

```python
def reset_imported_libraries() -> None
```

##### `reset_language` <a name="reset_language" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetLanguage"></a>

```python
def reset_language() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_return_table_type` <a name="reset_return_table_type" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetReturnTableType"></a>

```python
def reset_return_table_type() -> None
```

##### `reset_return_type` <a name="reset_return_type" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetReturnType"></a>

```python
def reset_return_type() -> None
```

##### `reset_routine_type` <a name="reset_routine_type" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetRoutineType"></a>

```python
def reset_routine_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import bigquery_routine

bigqueryRoutine.BigqueryRoutine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import bigquery_routine

bigqueryRoutine.BigqueryRoutine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import bigquery_routine

bigqueryRoutine.BigqueryRoutine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.arguments">arguments</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList">BigqueryRoutineArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference">BigqueryRoutineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.argumentsInput">arguments_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.definitionBodyInput">definition_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.determinismLevelInput">determinism_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.importedLibrariesInput">imported_libraries_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.languageInput">language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTableTypeInput">return_table_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTypeInput">return_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineIdInput">routine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineTypeInput">routine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.definitionBody">definition_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.determinismLevel">determinism_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.importedLibraries">imported_libraries</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTableType">return_table_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnType">return_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineId">routine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineType">routine_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.arguments"></a>

```python
arguments: BigqueryRoutineArgumentsList
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList">BigqueryRoutineArgumentsList</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.timeouts"></a>

```python
timeouts: BigqueryRoutineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference">BigqueryRoutineTimeoutsOutputReference</a>

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.argumentsInput"></a>

```python
arguments_input: typing.Union[IResolvable, typing.List[BigqueryRoutineArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>]]

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `definition_body_input`<sup>Optional</sup> <a name="definition_body_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.definitionBodyInput"></a>

```python
definition_body_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `determinism_level_input`<sup>Optional</sup> <a name="determinism_level_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.determinismLevelInput"></a>

```python
determinism_level_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `imported_libraries_input`<sup>Optional</sup> <a name="imported_libraries_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.importedLibrariesInput"></a>

```python
imported_libraries_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `language_input`<sup>Optional</sup> <a name="language_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.languageInput"></a>

```python
language_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `return_table_type_input`<sup>Optional</sup> <a name="return_table_type_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTableTypeInput"></a>

```python
return_table_type_input: str
```

- *Type:* str

---

##### `return_type_input`<sup>Optional</sup> <a name="return_type_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTypeInput"></a>

```python
return_type_input: str
```

- *Type:* str

---

##### `routine_id_input`<sup>Optional</sup> <a name="routine_id_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineIdInput"></a>

```python
routine_id_input: str
```

- *Type:* str

---

##### `routine_type_input`<sup>Optional</sup> <a name="routine_type_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineTypeInput"></a>

```python
routine_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BigqueryRoutineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a>]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `definition_body`<sup>Required</sup> <a name="definition_body" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.definitionBody"></a>

```python
definition_body: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `determinism_level`<sup>Required</sup> <a name="determinism_level" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.determinismLevel"></a>

```python
determinism_level: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `imported_libraries`<sup>Required</sup> <a name="imported_libraries" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.importedLibraries"></a>

```python
imported_libraries: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `return_table_type`<sup>Required</sup> <a name="return_table_type" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTableType"></a>

```python
return_table_type: str
```

- *Type:* str

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnType"></a>

```python
return_type: str
```

- *Type:* str

---

##### `routine_id`<sup>Required</sup> <a name="routine_id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineId"></a>

```python
routine_id: str
```

- *Type:* str

---

##### `routine_type`<sup>Required</sup> <a name="routine_type" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineType"></a>

```python
routine_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryRoutineArguments <a name="BigqueryRoutineArguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_routine

bigqueryRoutine.BigqueryRoutineArguments(
  argument_kind: str = None,
  data_type: str = None,
  mode: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.argumentKind">argument_kind</a></code> | <code>str</code> | Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.dataType">data_type</a></code> | <code>str</code> | A JSON schema for the data type. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.mode">mode</a></code> | <code>str</code> | Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.name">name</a></code> | <code>str</code> | The name of this argument. Can be absent for function return argument. |

---

##### `argument_kind`<sup>Optional</sup> <a name="argument_kind" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.argumentKind"></a>

```python
argument_kind: str
```

- *Type:* str

Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#argument_kind BigqueryRoutine#argument_kind}

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

A JSON schema for the data type.

Required unless argumentKind = ANY_TYPE.
~>**NOTE**: Because this field expects a JSON string, any changes to the string
will create a diff, even if the JSON itself hasn't changed. If the API returns
a different value for the same schema, e.g. it switched the order of values
or replaced STRUCT field type with RECORD field type, we currently cannot
suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#data_type BigqueryRoutine#data_type}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.mode"></a>

```python
mode: str
```

- *Type:* str

Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#mode BigqueryRoutine#mode}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this argument. Can be absent for function return argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#name BigqueryRoutine#name}

---

### BigqueryRoutineConfig <a name="BigqueryRoutineConfig" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_routine

bigqueryRoutine.BigqueryRoutineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset_id: str,
  definition_body: str,
  routine_id: str,
  arguments: typing.Union[IResolvable, typing.List[BigqueryRoutineArguments]] = None,
  description: str = None,
  determinism_level: str = None,
  id: str = None,
  imported_libraries: typing.List[str] = None,
  language: str = None,
  project: str = None,
  return_table_type: str = None,
  return_type: str = None,
  routine_type: str = None,
  timeouts: BigqueryRoutineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this routine. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.definitionBody">definition_body</a></code> | <code>str</code> | The body of the routine. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.routineId">routine_id</a></code> | <code>str</code> | The ID of the the routine. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.arguments">arguments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>]]</code> | arguments block. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.description">description</a></code> | <code>str</code> | The description of the routine if defined. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.determinismLevel">determinism_level</a></code> | <code>str</code> | The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#id BigqueryRoutine#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.importedLibraries">imported_libraries</a></code> | <code>typing.List[str]</code> | Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.language">language</a></code> | <code>str</code> | The language of the routine. Possible values: ["SQL", "JAVASCRIPT"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#project BigqueryRoutine#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.returnTableType">return_table_type</a></code> | <code>str</code> | Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION". |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.returnType">return_type</a></code> | <code>str</code> | A JSON schema for the return type. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.routineType">routine_type</a></code> | <code>str</code> | The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this routine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#dataset_id BigqueryRoutine#dataset_id}

---

##### `definition_body`<sup>Required</sup> <a name="definition_body" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.definitionBody"></a>

```python
definition_body: str
```

- *Type:* str

The body of the routine.

For functions, this is the expression in the AS clause.
If language=SQL, it is the substring inside (but excluding) the parentheses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#definition_body BigqueryRoutine#definition_body}

---

##### `routine_id`<sup>Required</sup> <a name="routine_id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.routineId"></a>

```python
routine_id: str
```

- *Type:* str

The ID of the the routine.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#routine_id BigqueryRoutine#routine_id}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.arguments"></a>

```python
arguments: typing.Union[IResolvable, typing.List[BigqueryRoutineArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>]]

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#arguments BigqueryRoutine#arguments}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the routine if defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#description BigqueryRoutine#description}

---

##### `determinism_level`<sup>Optional</sup> <a name="determinism_level" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.determinismLevel"></a>

```python
determinism_level: str
```

- *Type:* str

The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#determinism_level BigqueryRoutine#determinism_level}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#id BigqueryRoutine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imported_libraries`<sup>Optional</sup> <a name="imported_libraries" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.importedLibraries"></a>

```python
imported_libraries: typing.List[str]
```

- *Type:* typing.List[str]

Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#imported_libraries BigqueryRoutine#imported_libraries}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.language"></a>

```python
language: str
```

- *Type:* str

The language of the routine. Possible values: ["SQL", "JAVASCRIPT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#language BigqueryRoutine#language}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#project BigqueryRoutine#project}.

---

##### `return_table_type`<sup>Optional</sup> <a name="return_table_type" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.returnTableType"></a>

```python
return_table_type: str
```

- *Type:* str

Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".

If absent, the return table type is inferred from definitionBody at query time in each query
that references this routine. If present, then the columns in the evaluated table result will
be cast to match the column types specificed in return table type, at query time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#return_table_type BigqueryRoutine#return_table_type}

---

##### `return_type`<sup>Optional</sup> <a name="return_type" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.returnType"></a>

```python
return_type: str
```

- *Type:* str

A JSON schema for the return type.

Optional if language = "SQL"; required otherwise.
If absent, the return type is inferred from definitionBody at query time in each query
that references this routine. If present, then the evaluated result will be cast to
the specified returned type at query time. ~>**NOTE**: Because this field expects a JSON
string, any changes to the string will create a diff, even if the JSON itself hasn't
changed. If the API returns a different value for the same schema, e.g. it switche
d the order of values or replaced STRUCT field type with RECORD field type, we currently
cannot suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#return_type BigqueryRoutine#return_type}

---

##### `routine_type`<sup>Optional</sup> <a name="routine_type" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.routineType"></a>

```python
routine_type: str
```

- *Type:* str

The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#routine_type BigqueryRoutine#routine_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.timeouts"></a>

```python
timeouts: BigqueryRoutineTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#timeouts BigqueryRoutine#timeouts}

---

### BigqueryRoutineTimeouts <a name="BigqueryRoutineTimeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_routine

bigqueryRoutine.BigqueryRoutineTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#create BigqueryRoutine#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#delete BigqueryRoutine#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#update BigqueryRoutine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#create BigqueryRoutine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#delete BigqueryRoutine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/bigquery_routine#update BigqueryRoutine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryRoutineArgumentsList <a name="BigqueryRoutineArgumentsList" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_routine

bigqueryRoutine.BigqueryRoutineArgumentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BigqueryRoutineArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BigqueryRoutineArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>]]

---


### BigqueryRoutineArgumentsOutputReference <a name="BigqueryRoutineArgumentsOutputReference" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_routine

bigqueryRoutine.BigqueryRoutineArgumentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetArgumentKind">reset_argument_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetDataType">reset_data_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_argument_kind` <a name="reset_argument_kind" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetArgumentKind"></a>

```python
def reset_argument_kind() -> None
```

##### `reset_data_type` <a name="reset_data_type" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetDataType"></a>

```python
def reset_data_type() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.argumentKindInput">argument_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.argumentKind">argument_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `argument_kind_input`<sup>Optional</sup> <a name="argument_kind_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.argumentKindInput"></a>

```python
argument_kind_input: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `argument_kind`<sup>Required</sup> <a name="argument_kind" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.argumentKind"></a>

```python
argument_kind: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BigqueryRoutineArguments]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>]

---


### BigqueryRoutineTimeoutsOutputReference <a name="BigqueryRoutineTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_routine

bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BigqueryRoutineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a>]

---



