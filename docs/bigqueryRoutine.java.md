# `bigqueryRoutine` Submodule <a name="`bigqueryRoutine` Submodule" id="@cdktf/provider-google.bigqueryRoutine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryRoutine <a name="BigqueryRoutine" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine google_bigquery_routine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_routine.BigqueryRoutine;

BigqueryRoutine.Builder.create(Construct scope, java.lang.String id)
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
    .datasetId(java.lang.String)
    .definitionBody(java.lang.String)
    .routineId(java.lang.String)
    .routineType(java.lang.String)
//  .arguments(IResolvable)
//  .arguments(java.util.List<BigqueryRoutineArguments>)
//  .dataGovernanceType(java.lang.String)
//  .description(java.lang.String)
//  .determinismLevel(java.lang.String)
//  .id(java.lang.String)
//  .importedLibraries(java.util.List<java.lang.String>)
//  .language(java.lang.String)
//  .project(java.lang.String)
//  .remoteFunctionOptions(BigqueryRoutineRemoteFunctionOptions)
//  .returnTableType(java.lang.String)
//  .returnType(java.lang.String)
//  .sparkOptions(BigqueryRoutineSparkOptions)
//  .timeouts(BigqueryRoutineTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset containing this routine. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.definitionBody">definitionBody</a></code> | <code>java.lang.String</code> | The body of the routine. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.routineId">routineId</a></code> | <code>java.lang.String</code> | The ID of the the routine. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.routineType">routineType</a></code> | <code>java.lang.String</code> | The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.arguments">arguments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>></code> | arguments block. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.dataGovernanceType">dataGovernanceType</a></code> | <code>java.lang.String</code> | If set to DATA_MASKING, the function is validated and made available as a masking function. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the routine if defined. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.determinismLevel">determinismLevel</a></code> | <code>java.lang.String</code> | The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#id BigqueryRoutine#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.importedLibraries">importedLibraries</a></code> | <code>java.util.List<java.lang.String></code> | Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.language">language</a></code> | <code>java.lang.String</code> | The language of the routine. Possible values: ["SQL", "JAVASCRIPT", "PYTHON", "JAVA", "SCALA"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#project BigqueryRoutine#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.remoteFunctionOptions">remoteFunctionOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions">BigqueryRoutineRemoteFunctionOptions</a></code> | remote_function_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.returnTableType">returnTableType</a></code> | <code>java.lang.String</code> | Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION". |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.returnType">returnType</a></code> | <code>java.lang.String</code> | A JSON schema for the return type. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.sparkOptions">sparkOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions">BigqueryRoutineSparkOptions</a></code> | spark_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.datasetId"></a>

- *Type:* java.lang.String

The ID of the dataset containing this routine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#dataset_id BigqueryRoutine#dataset_id}

---

##### `definitionBody`<sup>Required</sup> <a name="definitionBody" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.definitionBody"></a>

- *Type:* java.lang.String

The body of the routine.

For functions, this is the expression in the AS clause.
If language=SQL, it is the substring inside (but excluding) the parentheses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#definition_body BigqueryRoutine#definition_body}

---

##### `routineId`<sup>Required</sup> <a name="routineId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.routineId"></a>

- *Type:* java.lang.String

The ID of the the routine.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#routine_id BigqueryRoutine#routine_id}

---

##### `routineType`<sup>Required</sup> <a name="routineType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.routineType"></a>

- *Type:* java.lang.String

The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#routine_type BigqueryRoutine#routine_type}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.arguments"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>>

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#arguments BigqueryRoutine#arguments}

---

##### `dataGovernanceType`<sup>Optional</sup> <a name="dataGovernanceType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.dataGovernanceType"></a>

- *Type:* java.lang.String

If set to DATA_MASKING, the function is validated and made available as a masking function.

For more information, see https://cloud.google.com/bigquery/docs/user-defined-functions#custom-mask Possible values: ["DATA_MASKING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#data_governance_type BigqueryRoutine#data_governance_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the routine if defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#description BigqueryRoutine#description}

---

##### `determinismLevel`<sup>Optional</sup> <a name="determinismLevel" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.determinismLevel"></a>

- *Type:* java.lang.String

The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#determinism_level BigqueryRoutine#determinism_level}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#id BigqueryRoutine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importedLibraries`<sup>Optional</sup> <a name="importedLibraries" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.importedLibraries"></a>

- *Type:* java.util.List<java.lang.String>

Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#imported_libraries BigqueryRoutine#imported_libraries}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.language"></a>

- *Type:* java.lang.String

The language of the routine. Possible values: ["SQL", "JAVASCRIPT", "PYTHON", "JAVA", "SCALA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#language BigqueryRoutine#language}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#project BigqueryRoutine#project}.

---

##### `remoteFunctionOptions`<sup>Optional</sup> <a name="remoteFunctionOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.remoteFunctionOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions">BigqueryRoutineRemoteFunctionOptions</a>

remote_function_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#remote_function_options BigqueryRoutine#remote_function_options}

---

##### `returnTableType`<sup>Optional</sup> <a name="returnTableType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.returnTableType"></a>

- *Type:* java.lang.String

Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".

If absent, the return table type is inferred from definitionBody at query time in each query
that references this routine. If present, then the columns in the evaluated table result will
be cast to match the column types specificed in return table type, at query time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#return_table_type BigqueryRoutine#return_table_type}

---

##### `returnType`<sup>Optional</sup> <a name="returnType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.returnType"></a>

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#return_type BigqueryRoutine#return_type}

---

##### `sparkOptions`<sup>Optional</sup> <a name="sparkOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.sparkOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions">BigqueryRoutineSparkOptions</a>

spark_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#spark_options BigqueryRoutine#spark_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#timeouts BigqueryRoutine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putArguments">putArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putRemoteFunctionOptions">putRemoteFunctionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putSparkOptions">putSparkOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetDataGovernanceType">resetDataGovernanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetDeterminismLevel">resetDeterminismLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetImportedLibraries">resetImportedLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetLanguage">resetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetRemoteFunctionOptions">resetRemoteFunctionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetReturnTableType">resetReturnTableType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetReturnType">resetReturnType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetSparkOptions">resetSparkOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArguments` <a name="putArguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putArguments"></a>

```java
public void putArguments(IResolvable OR java.util.List<BigqueryRoutineArguments> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putArguments.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>>

---

##### `putRemoteFunctionOptions` <a name="putRemoteFunctionOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putRemoteFunctionOptions"></a>

```java
public void putRemoteFunctionOptions(BigqueryRoutineRemoteFunctionOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putRemoteFunctionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions">BigqueryRoutineRemoteFunctionOptions</a>

---

##### `putSparkOptions` <a name="putSparkOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putSparkOptions"></a>

```java
public void putSparkOptions(BigqueryRoutineSparkOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putSparkOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions">BigqueryRoutineSparkOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putTimeouts"></a>

```java
public void putTimeouts(BigqueryRoutineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a>

---

##### `resetArguments` <a name="resetArguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetArguments"></a>

```java
public void resetArguments()
```

##### `resetDataGovernanceType` <a name="resetDataGovernanceType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetDataGovernanceType"></a>

```java
public void resetDataGovernanceType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDeterminismLevel` <a name="resetDeterminismLevel" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetDeterminismLevel"></a>

```java
public void resetDeterminismLevel()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetId"></a>

```java
public void resetId()
```

##### `resetImportedLibraries` <a name="resetImportedLibraries" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetImportedLibraries"></a>

```java
public void resetImportedLibraries()
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetLanguage"></a>

```java
public void resetLanguage()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetProject"></a>

```java
public void resetProject()
```

##### `resetRemoteFunctionOptions` <a name="resetRemoteFunctionOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetRemoteFunctionOptions"></a>

```java
public void resetRemoteFunctionOptions()
```

##### `resetReturnTableType` <a name="resetReturnTableType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetReturnTableType"></a>

```java
public void resetReturnTableType()
```

##### `resetReturnType` <a name="resetReturnType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetReturnType"></a>

```java
public void resetReturnType()
```

##### `resetSparkOptions` <a name="resetSparkOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetSparkOptions"></a>

```java
public void resetSparkOptions()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryRoutine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_routine.BigqueryRoutine;

BigqueryRoutine.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_routine.BigqueryRoutine;

BigqueryRoutine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_routine.BigqueryRoutine;

BigqueryRoutine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_routine.BigqueryRoutine;

BigqueryRoutine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BigqueryRoutine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BigqueryRoutine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BigqueryRoutine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BigqueryRoutine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryRoutine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.arguments">arguments</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList">BigqueryRoutineArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.remoteFunctionOptions">remoteFunctionOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference">BigqueryRoutineRemoteFunctionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.sparkOptions">sparkOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference">BigqueryRoutineSparkOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference">BigqueryRoutineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.argumentsInput">argumentsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.dataGovernanceTypeInput">dataGovernanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.definitionBodyInput">definitionBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.determinismLevelInput">determinismLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.importedLibrariesInput">importedLibrariesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.languageInput">languageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.remoteFunctionOptionsInput">remoteFunctionOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions">BigqueryRoutineRemoteFunctionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTableTypeInput">returnTableTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTypeInput">returnTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineIdInput">routineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineTypeInput">routineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.sparkOptionsInput">sparkOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions">BigqueryRoutineSparkOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.dataGovernanceType">dataGovernanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.definitionBody">definitionBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.determinismLevel">determinismLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.importedLibraries">importedLibraries</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.language">language</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTableType">returnTableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnType">returnType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineId">routineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineType">routineType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.arguments"></a>

```java
public BigqueryRoutineArgumentsList getArguments();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList">BigqueryRoutineArgumentsList</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.creationTime"></a>

```java
public java.lang.Number getCreationTime();
```

- *Type:* java.lang.Number

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.lastModifiedTime"></a>

```java
public java.lang.Number getLastModifiedTime();
```

- *Type:* java.lang.Number

---

##### `remoteFunctionOptions`<sup>Required</sup> <a name="remoteFunctionOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.remoteFunctionOptions"></a>

```java
public BigqueryRoutineRemoteFunctionOptionsOutputReference getRemoteFunctionOptions();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference">BigqueryRoutineRemoteFunctionOptionsOutputReference</a>

---

##### `sparkOptions`<sup>Required</sup> <a name="sparkOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.sparkOptions"></a>

```java
public BigqueryRoutineSparkOptionsOutputReference getSparkOptions();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference">BigqueryRoutineSparkOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.timeouts"></a>

```java
public BigqueryRoutineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference">BigqueryRoutineTimeoutsOutputReference</a>

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.argumentsInput"></a>

```java
public java.lang.Object getArgumentsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>>

---

##### `dataGovernanceTypeInput`<sup>Optional</sup> <a name="dataGovernanceTypeInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.dataGovernanceTypeInput"></a>

```java
public java.lang.String getDataGovernanceTypeInput();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `definitionBodyInput`<sup>Optional</sup> <a name="definitionBodyInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.definitionBodyInput"></a>

```java
public java.lang.String getDefinitionBodyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `determinismLevelInput`<sup>Optional</sup> <a name="determinismLevelInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.determinismLevelInput"></a>

```java
public java.lang.String getDeterminismLevelInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `importedLibrariesInput`<sup>Optional</sup> <a name="importedLibrariesInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.importedLibrariesInput"></a>

```java
public java.util.List<java.lang.String> getImportedLibrariesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.languageInput"></a>

```java
public java.lang.String getLanguageInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `remoteFunctionOptionsInput`<sup>Optional</sup> <a name="remoteFunctionOptionsInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.remoteFunctionOptionsInput"></a>

```java
public BigqueryRoutineRemoteFunctionOptions getRemoteFunctionOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions">BigqueryRoutineRemoteFunctionOptions</a>

---

##### `returnTableTypeInput`<sup>Optional</sup> <a name="returnTableTypeInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTableTypeInput"></a>

```java
public java.lang.String getReturnTableTypeInput();
```

- *Type:* java.lang.String

---

##### `returnTypeInput`<sup>Optional</sup> <a name="returnTypeInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTypeInput"></a>

```java
public java.lang.String getReturnTypeInput();
```

- *Type:* java.lang.String

---

##### `routineIdInput`<sup>Optional</sup> <a name="routineIdInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineIdInput"></a>

```java
public java.lang.String getRoutineIdInput();
```

- *Type:* java.lang.String

---

##### `routineTypeInput`<sup>Optional</sup> <a name="routineTypeInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineTypeInput"></a>

```java
public java.lang.String getRoutineTypeInput();
```

- *Type:* java.lang.String

---

##### `sparkOptionsInput`<sup>Optional</sup> <a name="sparkOptionsInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.sparkOptionsInput"></a>

```java
public BigqueryRoutineSparkOptions getSparkOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions">BigqueryRoutineSparkOptions</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a>

---

##### `dataGovernanceType`<sup>Required</sup> <a name="dataGovernanceType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.dataGovernanceType"></a>

```java
public java.lang.String getDataGovernanceType();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `definitionBody`<sup>Required</sup> <a name="definitionBody" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.definitionBody"></a>

```java
public java.lang.String getDefinitionBody();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `determinismLevel`<sup>Required</sup> <a name="determinismLevel" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.determinismLevel"></a>

```java
public java.lang.String getDeterminismLevel();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `importedLibraries`<sup>Required</sup> <a name="importedLibraries" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.importedLibraries"></a>

```java
public java.util.List<java.lang.String> getImportedLibraries();
```

- *Type:* java.util.List<java.lang.String>

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `returnTableType`<sup>Required</sup> <a name="returnTableType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTableType"></a>

```java
public java.lang.String getReturnTableType();
```

- *Type:* java.lang.String

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnType"></a>

```java
public java.lang.String getReturnType();
```

- *Type:* java.lang.String

---

##### `routineId`<sup>Required</sup> <a name="routineId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineId"></a>

```java
public java.lang.String getRoutineId();
```

- *Type:* java.lang.String

---

##### `routineType`<sup>Required</sup> <a name="routineType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineType"></a>

```java
public java.lang.String getRoutineType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryRoutineArguments <a name="BigqueryRoutineArguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_routine.BigqueryRoutineArguments;

BigqueryRoutineArguments.builder()
//  .argumentKind(java.lang.String)
//  .dataType(java.lang.String)
//  .mode(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.argumentKind">argumentKind</a></code> | <code>java.lang.String</code> | Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.dataType">dataType</a></code> | <code>java.lang.String</code> | A JSON schema for the data type. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.mode">mode</a></code> | <code>java.lang.String</code> | Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.name">name</a></code> | <code>java.lang.String</code> | The name of this argument. Can be absent for function return argument. |

---

##### `argumentKind`<sup>Optional</sup> <a name="argumentKind" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.argumentKind"></a>

```java
public java.lang.String getArgumentKind();
```

- *Type:* java.lang.String

Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#argument_kind BigqueryRoutine#argument_kind}

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

A JSON schema for the data type.

Required unless argumentKind = ANY_TYPE.
~>**NOTE**: Because this field expects a JSON string, any changes to the string
will create a diff, even if the JSON itself hasn't changed. If the API returns
a different value for the same schema, e.g. it switched the order of values
or replaced STRUCT field type with RECORD field type, we currently cannot
suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#data_type BigqueryRoutine#data_type}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#mode BigqueryRoutine#mode}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of this argument. Can be absent for function return argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#name BigqueryRoutine#name}

---

### BigqueryRoutineConfig <a name="BigqueryRoutineConfig" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_routine.BigqueryRoutineConfig;

BigqueryRoutineConfig.builder()
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
    .datasetId(java.lang.String)
    .definitionBody(java.lang.String)
    .routineId(java.lang.String)
    .routineType(java.lang.String)
//  .arguments(IResolvable)
//  .arguments(java.util.List<BigqueryRoutineArguments>)
//  .dataGovernanceType(java.lang.String)
//  .description(java.lang.String)
//  .determinismLevel(java.lang.String)
//  .id(java.lang.String)
//  .importedLibraries(java.util.List<java.lang.String>)
//  .language(java.lang.String)
//  .project(java.lang.String)
//  .remoteFunctionOptions(BigqueryRoutineRemoteFunctionOptions)
//  .returnTableType(java.lang.String)
//  .returnType(java.lang.String)
//  .sparkOptions(BigqueryRoutineSparkOptions)
//  .timeouts(BigqueryRoutineTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset containing this routine. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.definitionBody">definitionBody</a></code> | <code>java.lang.String</code> | The body of the routine. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.routineId">routineId</a></code> | <code>java.lang.String</code> | The ID of the the routine. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.routineType">routineType</a></code> | <code>java.lang.String</code> | The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.arguments">arguments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>></code> | arguments block. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.dataGovernanceType">dataGovernanceType</a></code> | <code>java.lang.String</code> | If set to DATA_MASKING, the function is validated and made available as a masking function. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the routine if defined. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.determinismLevel">determinismLevel</a></code> | <code>java.lang.String</code> | The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#id BigqueryRoutine#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.importedLibraries">importedLibraries</a></code> | <code>java.util.List<java.lang.String></code> | Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.language">language</a></code> | <code>java.lang.String</code> | The language of the routine. Possible values: ["SQL", "JAVASCRIPT", "PYTHON", "JAVA", "SCALA"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#project BigqueryRoutine#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.remoteFunctionOptions">remoteFunctionOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions">BigqueryRoutineRemoteFunctionOptions</a></code> | remote_function_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.returnTableType">returnTableType</a></code> | <code>java.lang.String</code> | Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION". |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.returnType">returnType</a></code> | <code>java.lang.String</code> | A JSON schema for the return type. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.sparkOptions">sparkOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions">BigqueryRoutineSparkOptions</a></code> | spark_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the dataset containing this routine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#dataset_id BigqueryRoutine#dataset_id}

---

##### `definitionBody`<sup>Required</sup> <a name="definitionBody" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.definitionBody"></a>

```java
public java.lang.String getDefinitionBody();
```

- *Type:* java.lang.String

The body of the routine.

For functions, this is the expression in the AS clause.
If language=SQL, it is the substring inside (but excluding) the parentheses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#definition_body BigqueryRoutine#definition_body}

---

##### `routineId`<sup>Required</sup> <a name="routineId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.routineId"></a>

```java
public java.lang.String getRoutineId();
```

- *Type:* java.lang.String

The ID of the the routine.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#routine_id BigqueryRoutine#routine_id}

---

##### `routineType`<sup>Required</sup> <a name="routineType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.routineType"></a>

```java
public java.lang.String getRoutineType();
```

- *Type:* java.lang.String

The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#routine_type BigqueryRoutine#routine_type}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.arguments"></a>

```java
public java.lang.Object getArguments();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>>

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#arguments BigqueryRoutine#arguments}

---

##### `dataGovernanceType`<sup>Optional</sup> <a name="dataGovernanceType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.dataGovernanceType"></a>

```java
public java.lang.String getDataGovernanceType();
```

- *Type:* java.lang.String

If set to DATA_MASKING, the function is validated and made available as a masking function.

For more information, see https://cloud.google.com/bigquery/docs/user-defined-functions#custom-mask Possible values: ["DATA_MASKING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#data_governance_type BigqueryRoutine#data_governance_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the routine if defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#description BigqueryRoutine#description}

---

##### `determinismLevel`<sup>Optional</sup> <a name="determinismLevel" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.determinismLevel"></a>

```java
public java.lang.String getDeterminismLevel();
```

- *Type:* java.lang.String

The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#determinism_level BigqueryRoutine#determinism_level}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#id BigqueryRoutine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importedLibraries`<sup>Optional</sup> <a name="importedLibraries" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.importedLibraries"></a>

```java
public java.util.List<java.lang.String> getImportedLibraries();
```

- *Type:* java.util.List<java.lang.String>

Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#imported_libraries BigqueryRoutine#imported_libraries}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

The language of the routine. Possible values: ["SQL", "JAVASCRIPT", "PYTHON", "JAVA", "SCALA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#language BigqueryRoutine#language}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#project BigqueryRoutine#project}.

---

##### `remoteFunctionOptions`<sup>Optional</sup> <a name="remoteFunctionOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.remoteFunctionOptions"></a>

```java
public BigqueryRoutineRemoteFunctionOptions getRemoteFunctionOptions();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions">BigqueryRoutineRemoteFunctionOptions</a>

remote_function_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#remote_function_options BigqueryRoutine#remote_function_options}

---

##### `returnTableType`<sup>Optional</sup> <a name="returnTableType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.returnTableType"></a>

```java
public java.lang.String getReturnTableType();
```

- *Type:* java.lang.String

Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".

If absent, the return table type is inferred from definitionBody at query time in each query
that references this routine. If present, then the columns in the evaluated table result will
be cast to match the column types specificed in return table type, at query time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#return_table_type BigqueryRoutine#return_table_type}

---

##### `returnType`<sup>Optional</sup> <a name="returnType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.returnType"></a>

```java
public java.lang.String getReturnType();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#return_type BigqueryRoutine#return_type}

---

##### `sparkOptions`<sup>Optional</sup> <a name="sparkOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.sparkOptions"></a>

```java
public BigqueryRoutineSparkOptions getSparkOptions();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions">BigqueryRoutineSparkOptions</a>

spark_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#spark_options BigqueryRoutine#spark_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.timeouts"></a>

```java
public BigqueryRoutineTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#timeouts BigqueryRoutine#timeouts}

---

### BigqueryRoutineRemoteFunctionOptions <a name="BigqueryRoutineRemoteFunctionOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_routine.BigqueryRoutineRemoteFunctionOptions;

BigqueryRoutineRemoteFunctionOptions.builder()
//  .connection(java.lang.String)
//  .endpoint(java.lang.String)
//  .maxBatchingRows(java.lang.String)
//  .userDefinedContext(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions.property.connection">connection</a></code> | <code>java.lang.String</code> | Fully qualified name of the user-provided connection object which holds the authentication information to send requests to the remote service. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Endpoint of the user-provided remote service, e.g. 'https://us-east1-my_gcf_project.cloudfunctions.net/remote_add'. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions.property.maxBatchingRows">maxBatchingRows</a></code> | <code>java.lang.String</code> | Max number of rows in each batch sent to the remote service. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions.property.userDefinedContext">userDefinedContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined context as a set of key/value pairs, which will be sent as function invocation context together with batched arguments in the requests to the remote service. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions.property.connection"></a>

```java
public java.lang.String getConnection();
```

- *Type:* java.lang.String

Fully qualified name of the user-provided connection object which holds the authentication information to send requests to the remote service.

Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#connection BigqueryRoutine#connection}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Endpoint of the user-provided remote service, e.g. 'https://us-east1-my_gcf_project.cloudfunctions.net/remote_add'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#endpoint BigqueryRoutine#endpoint}

---

##### `maxBatchingRows`<sup>Optional</sup> <a name="maxBatchingRows" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions.property.maxBatchingRows"></a>

```java
public java.lang.String getMaxBatchingRows();
```

- *Type:* java.lang.String

Max number of rows in each batch sent to the remote service.

If absent or if 0,
BigQuery dynamically decides the number of rows in a batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#max_batching_rows BigqueryRoutine#max_batching_rows}

---

##### `userDefinedContext`<sup>Optional</sup> <a name="userDefinedContext" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions.property.userDefinedContext"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserDefinedContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined context as a set of key/value pairs, which will be sent as function invocation context together with batched arguments in the requests to the remote service.

The total number of bytes of keys and values must be less than 8KB.

An object containing a list of "key": value pairs. Example:
'{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#user_defined_context BigqueryRoutine#user_defined_context}

---

### BigqueryRoutineSparkOptions <a name="BigqueryRoutineSparkOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_routine.BigqueryRoutineSparkOptions;

BigqueryRoutineSparkOptions.builder()
//  .archiveUris(java.util.List<java.lang.String>)
//  .connection(java.lang.String)
//  .containerImage(java.lang.String)
//  .fileUris(java.util.List<java.lang.String>)
//  .jarUris(java.util.List<java.lang.String>)
//  .mainClass(java.lang.String)
//  .mainFileUri(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .pyFileUris(java.util.List<java.lang.String>)
//  .runtimeVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | Archive files to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.connection">connection</a></code> | <code>java.lang.String</code> | Fully qualified name of the user-provided Spark connection object. Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}". |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.containerImage">containerImage</a></code> | <code>java.lang.String</code> | Custom container image for the runtime environment. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | Files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.jarUris">jarUris</a></code> | <code>java.util.List<java.lang.String></code> | JARs to include on the driver and executor CLASSPATH. For more information about Apache Spark, see Apache Spark. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.mainClass">mainClass</a></code> | <code>java.lang.String</code> | The fully qualified name of a class in jarUris, for example, com.example.wordcount. Exactly one of mainClass and main_jar_uri field should be set for Java/Scala language type. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.mainFileUri">mainFileUri</a></code> | <code>java.lang.String</code> | The main file/jar URI of the Spark application. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Configuration properties as a set of key/value pairs, which will be passed on to the Spark application. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.pyFileUris">pyFileUris</a></code> | <code>java.util.List<java.lang.String></code> | Python files to be placed on the PYTHONPATH for PySpark application. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | Runtime version. If not specified, the default runtime version is used. |

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

Archive files to be extracted into the working directory of each executor.

For more information about Apache Spark, see Apache Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#archive_uris BigqueryRoutine#archive_uris}

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.connection"></a>

```java
public java.lang.String getConnection();
```

- *Type:* java.lang.String

Fully qualified name of the user-provided Spark connection object. Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#connection BigqueryRoutine#connection}

---

##### `containerImage`<sup>Optional</sup> <a name="containerImage" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.containerImage"></a>

```java
public java.lang.String getContainerImage();
```

- *Type:* java.lang.String

Custom container image for the runtime environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#container_image BigqueryRoutine#container_image}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

Files to be placed in the working directory of each executor.

For more information about Apache Spark, see Apache Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#file_uris BigqueryRoutine#file_uris}

---

##### `jarUris`<sup>Optional</sup> <a name="jarUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.jarUris"></a>

```java
public java.util.List<java.lang.String> getJarUris();
```

- *Type:* java.util.List<java.lang.String>

JARs to include on the driver and executor CLASSPATH. For more information about Apache Spark, see Apache Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#jar_uris BigqueryRoutine#jar_uris}

---

##### `mainClass`<sup>Optional</sup> <a name="mainClass" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.mainClass"></a>

```java
public java.lang.String getMainClass();
```

- *Type:* java.lang.String

The fully qualified name of a class in jarUris, for example, com.example.wordcount. Exactly one of mainClass and main_jar_uri field should be set for Java/Scala language type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#main_class BigqueryRoutine#main_class}

---

##### `mainFileUri`<sup>Optional</sup> <a name="mainFileUri" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.mainFileUri"></a>

```java
public java.lang.String getMainFileUri();
```

- *Type:* java.lang.String

The main file/jar URI of the Spark application.

Exactly one of the definitionBody field and the mainFileUri field must be set for Python.
Exactly one of mainClass and mainFileUri field should be set for Java/Scala language type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#main_file_uri BigqueryRoutine#main_file_uri}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Configuration properties as a set of key/value pairs, which will be passed on to the Spark application.

For more information, see Apache Spark and the procedure option list.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#properties BigqueryRoutine#properties}

---

##### `pyFileUris`<sup>Optional</sup> <a name="pyFileUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.pyFileUris"></a>

```java
public java.util.List<java.lang.String> getPyFileUris();
```

- *Type:* java.util.List<java.lang.String>

Python files to be placed on the PYTHONPATH for PySpark application.

Supported file types: .py, .egg, and .zip. For more information about Apache Spark, see Apache Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#py_file_uris BigqueryRoutine#py_file_uris}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

Runtime version. If not specified, the default runtime version is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#runtime_version BigqueryRoutine#runtime_version}

---

### BigqueryRoutineTimeouts <a name="BigqueryRoutineTimeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_routine.BigqueryRoutineTimeouts;

BigqueryRoutineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#create BigqueryRoutine#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#delete BigqueryRoutine#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#update BigqueryRoutine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#create BigqueryRoutine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#delete BigqueryRoutine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigquery_routine#update BigqueryRoutine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryRoutineArgumentsList <a name="BigqueryRoutineArgumentsList" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_routine.BigqueryRoutineArgumentsList;

new BigqueryRoutineArgumentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.get"></a>

```java
public BigqueryRoutineArgumentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>>

---


### BigqueryRoutineArgumentsOutputReference <a name="BigqueryRoutineArgumentsOutputReference" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_routine.BigqueryRoutineArgumentsOutputReference;

new BigqueryRoutineArgumentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetArgumentKind">resetArgumentKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgumentKind` <a name="resetArgumentKind" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetArgumentKind"></a>

```java
public void resetArgumentKind()
```

##### `resetDataType` <a name="resetDataType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetDataType"></a>

```java
public void resetDataType()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.argumentKindInput">argumentKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.argumentKind">argumentKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `argumentKindInput`<sup>Optional</sup> <a name="argumentKindInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.argumentKindInput"></a>

```java
public java.lang.String getArgumentKindInput();
```

- *Type:* java.lang.String

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.dataTypeInput"></a>

```java
public java.lang.String getDataTypeInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `argumentKind`<sup>Required</sup> <a name="argumentKind" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.argumentKind"></a>

```java
public java.lang.String getArgumentKind();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments">BigqueryRoutineArguments</a>

---


### BigqueryRoutineRemoteFunctionOptionsOutputReference <a name="BigqueryRoutineRemoteFunctionOptionsOutputReference" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_routine.BigqueryRoutineRemoteFunctionOptionsOutputReference;

new BigqueryRoutineRemoteFunctionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resetConnection">resetConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resetMaxBatchingRows">resetMaxBatchingRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resetUserDefinedContext">resetUserDefinedContext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnection` <a name="resetConnection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resetConnection"></a>

```java
public void resetConnection()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetMaxBatchingRows` <a name="resetMaxBatchingRows" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resetMaxBatchingRows"></a>

```java
public void resetMaxBatchingRows()
```

##### `resetUserDefinedContext` <a name="resetUserDefinedContext" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resetUserDefinedContext"></a>

```java
public void resetUserDefinedContext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.connectionInput">connectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.maxBatchingRowsInput">maxBatchingRowsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.userDefinedContextInput">userDefinedContextInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.connection">connection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.maxBatchingRows">maxBatchingRows</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.userDefinedContext">userDefinedContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions">BigqueryRoutineRemoteFunctionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionInput`<sup>Optional</sup> <a name="connectionInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.connectionInput"></a>

```java
public java.lang.String getConnectionInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `maxBatchingRowsInput`<sup>Optional</sup> <a name="maxBatchingRowsInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.maxBatchingRowsInput"></a>

```java
public java.lang.String getMaxBatchingRowsInput();
```

- *Type:* java.lang.String

---

##### `userDefinedContextInput`<sup>Optional</sup> <a name="userDefinedContextInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.userDefinedContextInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserDefinedContextInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.connection"></a>

```java
public java.lang.String getConnection();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `maxBatchingRows`<sup>Required</sup> <a name="maxBatchingRows" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.maxBatchingRows"></a>

```java
public java.lang.String getMaxBatchingRows();
```

- *Type:* java.lang.String

---

##### `userDefinedContext`<sup>Required</sup> <a name="userDefinedContext" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.userDefinedContext"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserDefinedContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.internalValue"></a>

```java
public BigqueryRoutineRemoteFunctionOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions">BigqueryRoutineRemoteFunctionOptions</a>

---


### BigqueryRoutineSparkOptionsOutputReference <a name="BigqueryRoutineSparkOptionsOutputReference" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_routine.BigqueryRoutineSparkOptionsOutputReference;

new BigqueryRoutineSparkOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetConnection">resetConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetContainerImage">resetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetJarUris">resetJarUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetMainClass">resetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetMainFileUri">resetMainFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetPyFileUris">resetPyFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetArchiveUris"></a>

```java
public void resetArchiveUris()
```

##### `resetConnection` <a name="resetConnection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetConnection"></a>

```java
public void resetConnection()
```

##### `resetContainerImage` <a name="resetContainerImage" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetContainerImage"></a>

```java
public void resetContainerImage()
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetFileUris"></a>

```java
public void resetFileUris()
```

##### `resetJarUris` <a name="resetJarUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetJarUris"></a>

```java
public void resetJarUris()
```

##### `resetMainClass` <a name="resetMainClass" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetMainClass"></a>

```java
public void resetMainClass()
```

##### `resetMainFileUri` <a name="resetMainFileUri" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetMainFileUri"></a>

```java
public void resetMainFileUri()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetPyFileUris` <a name="resetPyFileUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetPyFileUris"></a>

```java
public void resetPyFileUris()
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetRuntimeVersion"></a>

```java
public void resetRuntimeVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.connectionInput">connectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.containerImageInput">containerImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.jarUrisInput">jarUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.mainClassInput">mainClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.mainFileUriInput">mainFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.pyFileUrisInput">pyFileUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.archiveUris">archiveUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.connection">connection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.containerImage">containerImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.fileUris">fileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.jarUris">jarUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.mainClass">mainClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.mainFileUri">mainFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.pyFileUris">pyFileUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions">BigqueryRoutineSparkOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.archiveUrisInput"></a>

```java
public java.util.List<java.lang.String> getArchiveUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionInput`<sup>Optional</sup> <a name="connectionInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.connectionInput"></a>

```java
public java.lang.String getConnectionInput();
```

- *Type:* java.lang.String

---

##### `containerImageInput`<sup>Optional</sup> <a name="containerImageInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.containerImageInput"></a>

```java
public java.lang.String getContainerImageInput();
```

- *Type:* java.lang.String

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.fileUrisInput"></a>

```java
public java.util.List<java.lang.String> getFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarUrisInput`<sup>Optional</sup> <a name="jarUrisInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.jarUrisInput"></a>

```java
public java.util.List<java.lang.String> getJarUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainClassInput`<sup>Optional</sup> <a name="mainClassInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.mainClassInput"></a>

```java
public java.lang.String getMainClassInput();
```

- *Type:* java.lang.String

---

##### `mainFileUriInput`<sup>Optional</sup> <a name="mainFileUriInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.mainFileUriInput"></a>

```java
public java.lang.String getMainFileUriInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pyFileUrisInput`<sup>Optional</sup> <a name="pyFileUrisInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.pyFileUrisInput"></a>

```java
public java.util.List<java.lang.String> getPyFileUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.runtimeVersionInput"></a>

```java
public java.lang.String getRuntimeVersionInput();
```

- *Type:* java.lang.String

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.archiveUris"></a>

```java
public java.util.List<java.lang.String> getArchiveUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.connection"></a>

```java
public java.lang.String getConnection();
```

- *Type:* java.lang.String

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.containerImage"></a>

```java
public java.lang.String getContainerImage();
```

- *Type:* java.lang.String

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.fileUris"></a>

```java
public java.util.List<java.lang.String> getFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarUris`<sup>Required</sup> <a name="jarUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.jarUris"></a>

```java
public java.util.List<java.lang.String> getJarUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainClass`<sup>Required</sup> <a name="mainClass" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.mainClass"></a>

```java
public java.lang.String getMainClass();
```

- *Type:* java.lang.String

---

##### `mainFileUri`<sup>Required</sup> <a name="mainFileUri" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.mainFileUri"></a>

```java
public java.lang.String getMainFileUri();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pyFileUris`<sup>Required</sup> <a name="pyFileUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.pyFileUris"></a>

```java
public java.util.List<java.lang.String> getPyFileUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.internalValue"></a>

```java
public BigqueryRoutineSparkOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions">BigqueryRoutineSparkOptions</a>

---


### BigqueryRoutineTimeoutsOutputReference <a name="BigqueryRoutineTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_routine.BigqueryRoutineTimeoutsOutputReference;

new BigqueryRoutineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a>

---



