# `dataGoogleOracleDatabaseAutonomousDatabases` Submodule <a name="`dataGoogleOracleDatabaseAutonomousDatabases` Submodule" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseAutonomousDatabases <a name="DataGoogleOracleDatabaseAutonomousDatabases" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_autonomous_databases google_oracle_database_autonomous_databases}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabases(scope Construct, id *string, config DataGoogleOracleDatabaseAutonomousDatabasesConfig) DataGoogleOracleDatabaseAutonomousDatabases
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig">DataGoogleOracleDatabaseAutonomousDatabasesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig">DataGoogleOracleDatabaseAutonomousDatabasesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleOracleDatabaseAutonomousDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.DataGoogleOracleDatabaseAutonomousDatabases_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.DataGoogleOracleDatabaseAutonomousDatabases_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.DataGoogleOracleDatabaseAutonomousDatabases_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.DataGoogleOracleDatabaseAutonomousDatabases_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleOracleDatabaseAutonomousDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleOracleDatabaseAutonomousDatabases to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleOracleDatabaseAutonomousDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_autonomous_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseAutonomousDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.autonomousDatabases">AutonomousDatabases</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutonomousDatabases`<sup>Required</sup> <a name="AutonomousDatabases" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.autonomousDatabases"></a>

```go
func AutonomousDatabases() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabases.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

&datagoogleoracledatabaseautonomousdatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

&datagoogleoracledatabaseautonomousdatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

&datagoogleoracledatabaseautonomousdatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

&datagoogleoracledatabaseautonomousdatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

&datagoogleoracledatabaseautonomousdatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

&datagoogleoracledatabaseautonomousdatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

&datagoogleoracledatabaseautonomousdatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

&datagoogleoracledatabaseautonomousdatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

&datagoogleoracledatabaseautonomousdatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

&datagoogleoracledatabaseautonomousdatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

&datagoogleoracledatabaseautonomousdatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

&datagoogleoracledatabaseautonomousdatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasesConfig <a name="DataGoogleOracleDatabaseAutonomousDatabasesConfig" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

&datagoogleoracledatabaseautonomousdatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.location">Location</a></code> | <code>*string</code> | location. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_autonomous_databases#id DataGoogleOracleDatabaseAutonomousDatabases#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the dataset is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_autonomous_databases#location DataGoogleOracleDatabaseAutonomousDatabases#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_autonomous_databases#id DataGoogleOracleDatabaseAutonomousDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the dataset is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_autonomous_databases#project DataGoogleOracleDatabaseAutonomousDatabases#project}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.deletionProtection">DeletionProtection</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.entitlementId">EntitlementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.odbNetwork">OdbNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.odbSubnet">OdbSubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousDatabaseId"></a>

```go
func AutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.deletionProtection"></a>

```go
func DeletionProtection() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.entitlementId"></a>

```go
func EntitlementId() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `OdbNetwork`<sup>Required</sup> <a name="OdbNetwork" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.odbNetwork"></a>

```go
func OdbNetwork() *string
```

- *Type:* *string

---

##### `OdbSubnet`<sup>Required</sup> <a name="OdbSubnet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.odbSubnet"></a>

```go
func OdbSubnet() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.properties"></a>

```go
func Properties() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabases</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.property.apexVersion">ApexVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.property.ordsVersion">OrdsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApexVersion`<sup>Required</sup> <a name="ApexVersion" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.property.apexVersion"></a>

```go
func ApexVersion() *string
```

- *Type:* *string

---

##### `OrdsVersion`<sup>Required</sup> <a name="OrdsVersion" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.property.ordsVersion"></a>

```go
func OrdsVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetails</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.high">High</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.low">Low</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.medium">Medium</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `High`<sup>Required</sup> <a name="High" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.high"></a>

```go
func High() *string
```

- *Type:* *string

---

##### `Low`<sup>Required</sup> <a name="Low" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.low"></a>

```go
func Low() *string
```

- *Type:* *string

---

##### `Medium`<sup>Required</sup> <a name="Medium" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.medium"></a>

```go
func Medium() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStrings</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.allConnectionStrings">AllConnectionStrings</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.dedicated">Dedicated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.high">High</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.low">Low</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.medium">Medium</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.profiles">Profiles</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllConnectionStrings`<sup>Required</sup> <a name="AllConnectionStrings" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.allConnectionStrings"></a>

```go
func AllConnectionStrings() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsAllConnectionStringsList</a>

---

##### `Dedicated`<sup>Required</sup> <a name="Dedicated" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.dedicated"></a>

```go
func Dedicated() *string
```

- *Type:* *string

---

##### `High`<sup>Required</sup> <a name="High" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.high"></a>

```go
func High() *string
```

- *Type:* *string

---

##### `Low`<sup>Required</sup> <a name="Low" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.low"></a>

```go
func Low() *string
```

- *Type:* *string

---

##### `Medium`<sup>Required</sup> <a name="Medium" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.medium"></a>

```go
func Medium() *string
```

- *Type:* *string

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.profiles"></a>

```go
func Profiles() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStrings</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.consumerGroup">ConsumerGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.hostFormat">HostFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.isRegional">IsRegional</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.sessionMode">SessionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.syntaxFormat">SyntaxFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.tlsAuthentication">TlsAuthentication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConsumerGroup`<sup>Required</sup> <a name="ConsumerGroup" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.consumerGroup"></a>

```go
func ConsumerGroup() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `HostFormat`<sup>Required</sup> <a name="HostFormat" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.hostFormat"></a>

```go
func HostFormat() *string
```

- *Type:* *string

---

##### `IsRegional`<sup>Required</sup> <a name="IsRegional" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.isRegional"></a>

```go
func IsRegional() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SessionMode`<sup>Required</sup> <a name="SessionMode" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.sessionMode"></a>

```go
func SessionMode() *string
```

- *Type:* *string

---

##### `SyntaxFormat`<sup>Required</sup> <a name="SyntaxFormat" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.syntaxFormat"></a>

```go
func SyntaxFormat() *string
```

- *Type:* *string

---

##### `TlsAuthentication`<sup>Required</sup> <a name="TlsAuthentication" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.tlsAuthentication"></a>

```go
func TlsAuthentication() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfilesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsProfiles</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.apexUri">ApexUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.databaseTransformsUri">DatabaseTransformsUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.graphStudioUri">GraphStudioUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.machineLearningNotebookUri">MachineLearningNotebookUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.machineLearningUserManagementUri">MachineLearningUserManagementUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.mongoDbUri">MongoDbUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.ordsUri">OrdsUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.sqlDevWebUri">SqlDevWebUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApexUri`<sup>Required</sup> <a name="ApexUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.apexUri"></a>

```go
func ApexUri() *string
```

- *Type:* *string

---

##### `DatabaseTransformsUri`<sup>Required</sup> <a name="DatabaseTransformsUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.databaseTransformsUri"></a>

```go
func DatabaseTransformsUri() *string
```

- *Type:* *string

---

##### `GraphStudioUri`<sup>Required</sup> <a name="GraphStudioUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.graphStudioUri"></a>

```go
func GraphStudioUri() *string
```

- *Type:* *string

---

##### `MachineLearningNotebookUri`<sup>Required</sup> <a name="MachineLearningNotebookUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.machineLearningNotebookUri"></a>

```go
func MachineLearningNotebookUri() *string
```

- *Type:* *string

---

##### `MachineLearningUserManagementUri`<sup>Required</sup> <a name="MachineLearningUserManagementUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.machineLearningUserManagementUri"></a>

```go
func MachineLearningUserManagementUri() *string
```

- *Type:* *string

---

##### `MongoDbUri`<sup>Required</sup> <a name="MongoDbUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.mongoDbUri"></a>

```go
func MongoDbUri() *string
```

- *Type:* *string

---

##### `OrdsUri`<sup>Required</sup> <a name="OrdsUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.ordsUri"></a>

```go
func OrdsUri() *string
```

- *Type:* *string

---

##### `SqlDevWebUri`<sup>Required</sup> <a name="SqlDevWebUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.sqlDevWebUri"></a>

```go
func SqlDevWebUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrls</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContacts</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.dataGuardRoleChangedTime">DataGuardRoleChangedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.disasterRecoveryRoleChangedTime">DisasterRecoveryRoleChangedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.lagTimeDuration">LagTimeDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataGuardRoleChangedTime`<sup>Required</sup> <a name="DataGuardRoleChangedTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.dataGuardRoleChangedTime"></a>

```go
func DataGuardRoleChangedTime() *string
```

- *Type:* *string

---

##### `DisasterRecoveryRoleChangedTime`<sup>Required</sup> <a name="DisasterRecoveryRoleChangedTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.disasterRecoveryRoleChangedTime"></a>

```go
func DisasterRecoveryRoleChangedTime() *string
```

- *Type:* *string

---

##### `LagTimeDuration`<sup>Required</sup> <a name="LagTimeDuration" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.lagTimeDuration"></a>

```go
func LagTimeDuration() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDb</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.actualUsedDataStorageSizeTb">ActualUsedDataStorageSizeTb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.allocatedStorageSizeTb">AllocatedStorageSizeTb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.apexDetails">ApexDetails</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.arePrimaryAllowlistedIpsUsed">ArePrimaryAllowlistedIpsUsed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.availableUpgradeVersions">AvailableUpgradeVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.backupRetentionPeriodDays">BackupRetentionPeriodDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.characterSet">CharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.connectionUrls">ConnectionUrls</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.customerContacts">CustomerContacts</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.databaseManagementState">DatabaseManagementState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dataSafeState">DataSafeState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dataStorageSizeGb">DataStorageSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dataStorageSizeTb">DataStorageSizeTb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dbEdition">DbEdition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dbVersion">DbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dbWorkload">DbWorkload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.failedDataRecoveryDuration">FailedDataRecoveryDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.isLocalDataGuardEnabled">IsLocalDataGuardEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.isStorageAutoScalingEnabled">IsStorageAutoScalingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit">LocalAdgAutoFailoverMaxDataLossLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.localDisasterRecoveryType">LocalDisasterRecoveryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.localStandbyDb">LocalStandbyDb</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.maintenanceBeginTime">MaintenanceBeginTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.maintenanceEndTime">MaintenanceEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.maintenanceScheduleType">MaintenanceScheduleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.memoryPerOracleComputeUnitGbs">MemoryPerOracleComputeUnitGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.memoryTableGbs">MemoryTableGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.mtlsConnectionRequired">MtlsConnectionRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.nCharacterSet">NCharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.nextLongTermBackupTime">NextLongTermBackupTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.ociUrl">OciUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.openMode">OpenMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.operationsInsightsState">OperationsInsightsState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.peerDbIds">PeerDbIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.permissionLevel">PermissionLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.privateEndpoint">PrivateEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.privateEndpointLabel">PrivateEndpointLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.refreshableMode">RefreshableMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.refreshableState">RefreshableState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.scheduledOperationDetails">ScheduledOperationDetails</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.sqlWebDeveloperUrl">SqlWebDeveloperUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.supportedCloneRegions">SupportedCloneRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.totalAutoBackupStorageSizeGbs">TotalAutoBackupStorageSizeGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.usedDataStorageSizeTbs">UsedDataStorageSizeTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActualUsedDataStorageSizeTb`<sup>Required</sup> <a name="ActualUsedDataStorageSizeTb" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.actualUsedDataStorageSizeTb"></a>

```go
func ActualUsedDataStorageSizeTb() *f64
```

- *Type:* *f64

---

##### `AllocatedStorageSizeTb`<sup>Required</sup> <a name="AllocatedStorageSizeTb" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.allocatedStorageSizeTb"></a>

```go
func AllocatedStorageSizeTb() *f64
```

- *Type:* *f64

---

##### `ApexDetails`<sup>Required</sup> <a name="ApexDetails" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.apexDetails"></a>

```go
func ApexDetails() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesApexDetailsList</a>

---

##### `ArePrimaryAllowlistedIpsUsed`<sup>Required</sup> <a name="ArePrimaryAllowlistedIpsUsed" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.arePrimaryAllowlistedIpsUsed"></a>

```go
func ArePrimaryAllowlistedIpsUsed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.autonomousContainerDatabaseId"></a>

```go
func AutonomousContainerDatabaseId() *string
```

- *Type:* *string

---

##### `AvailableUpgradeVersions`<sup>Required</sup> <a name="AvailableUpgradeVersions" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.availableUpgradeVersions"></a>

```go
func AvailableUpgradeVersions() *[]*string
```

- *Type:* *[]*string

---

##### `BackupRetentionPeriodDays`<sup>Required</sup> <a name="BackupRetentionPeriodDays" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.backupRetentionPeriodDays"></a>

```go
func BackupRetentionPeriodDays() *f64
```

- *Type:* *f64

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.characterSet"></a>

```go
func CharacterSet() *string
```

- *Type:* *string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.connectionStrings"></a>

```go
func ConnectionStrings() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionStringsList</a>

---

##### `ConnectionUrls`<sup>Required</sup> <a name="ConnectionUrls" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.connectionUrls"></a>

```go
func ConnectionUrls() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesConnectionUrlsList</a>

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.customerContacts"></a>

```go
func CustomerContacts() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesCustomerContactsList</a>

---

##### `DatabaseManagementState`<sup>Required</sup> <a name="DatabaseManagementState" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.databaseManagementState"></a>

```go
func DatabaseManagementState() *string
```

- *Type:* *string

---

##### `DataSafeState`<sup>Required</sup> <a name="DataSafeState" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dataSafeState"></a>

```go
func DataSafeState() *string
```

- *Type:* *string

---

##### `DataStorageSizeGb`<sup>Required</sup> <a name="DataStorageSizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dataStorageSizeGb"></a>

```go
func DataStorageSizeGb() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeTb`<sup>Required</sup> <a name="DataStorageSizeTb" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dataStorageSizeTb"></a>

```go
func DataStorageSizeTb() *f64
```

- *Type:* *f64

---

##### `DbEdition`<sup>Required</sup> <a name="DbEdition" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dbEdition"></a>

```go
func DbEdition() *string
```

- *Type:* *string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dbVersion"></a>

```go
func DbVersion() *string
```

- *Type:* *string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.dbWorkload"></a>

```go
func DbWorkload() *string
```

- *Type:* *string

---

##### `FailedDataRecoveryDuration`<sup>Required</sup> <a name="FailedDataRecoveryDuration" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.failedDataRecoveryDuration"></a>

```go
func FailedDataRecoveryDuration() *string
```

- *Type:* *string

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.isAutoScalingEnabled"></a>

```go
func IsAutoScalingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsLocalDataGuardEnabled`<sup>Required</sup> <a name="IsLocalDataGuardEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.isLocalDataGuardEnabled"></a>

```go
func IsLocalDataGuardEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsStorageAutoScalingEnabled`<sup>Required</sup> <a name="IsStorageAutoScalingEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.isStorageAutoScalingEnabled"></a>

```go
func IsStorageAutoScalingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LocalAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="LocalAdgAutoFailoverMaxDataLossLimit" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```go
func LocalAdgAutoFailoverMaxDataLossLimit() *f64
```

- *Type:* *f64

---

##### `LocalDisasterRecoveryType`<sup>Required</sup> <a name="LocalDisasterRecoveryType" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.localDisasterRecoveryType"></a>

```go
func LocalDisasterRecoveryType() *string
```

- *Type:* *string

---

##### `LocalStandbyDb`<sup>Required</sup> <a name="LocalStandbyDb" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.localStandbyDb"></a>

```go
func LocalStandbyDb() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesLocalStandbyDbList</a>

---

##### `MaintenanceBeginTime`<sup>Required</sup> <a name="MaintenanceBeginTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.maintenanceBeginTime"></a>

```go
func MaintenanceBeginTime() *string
```

- *Type:* *string

---

##### `MaintenanceEndTime`<sup>Required</sup> <a name="MaintenanceEndTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.maintenanceEndTime"></a>

```go
func MaintenanceEndTime() *string
```

- *Type:* *string

---

##### `MaintenanceScheduleType`<sup>Required</sup> <a name="MaintenanceScheduleType" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.maintenanceScheduleType"></a>

```go
func MaintenanceScheduleType() *string
```

- *Type:* *string

---

##### `MemoryPerOracleComputeUnitGbs`<sup>Required</sup> <a name="MemoryPerOracleComputeUnitGbs" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.memoryPerOracleComputeUnitGbs"></a>

```go
func MemoryPerOracleComputeUnitGbs() *f64
```

- *Type:* *f64

---

##### `MemoryTableGbs`<sup>Required</sup> <a name="MemoryTableGbs" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.memoryTableGbs"></a>

```go
func MemoryTableGbs() *f64
```

- *Type:* *f64

---

##### `MtlsConnectionRequired`<sup>Required</sup> <a name="MtlsConnectionRequired" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.mtlsConnectionRequired"></a>

```go
func MtlsConnectionRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NCharacterSet`<sup>Required</sup> <a name="NCharacterSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.nCharacterSet"></a>

```go
func NCharacterSet() *string
```

- *Type:* *string

---

##### `NextLongTermBackupTime`<sup>Required</sup> <a name="NextLongTermBackupTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.nextLongTermBackupTime"></a>

```go
func NextLongTermBackupTime() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.ociUrl"></a>

```go
func OciUrl() *string
```

- *Type:* *string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.openMode"></a>

```go
func OpenMode() *string
```

- *Type:* *string

---

##### `OperationsInsightsState`<sup>Required</sup> <a name="OperationsInsightsState" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.operationsInsightsState"></a>

```go
func OperationsInsightsState() *string
```

- *Type:* *string

---

##### `PeerDbIds`<sup>Required</sup> <a name="PeerDbIds" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.peerDbIds"></a>

```go
func PeerDbIds() *[]*string
```

- *Type:* *[]*string

---

##### `PermissionLevel`<sup>Required</sup> <a name="PermissionLevel" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.permissionLevel"></a>

```go
func PermissionLevel() *string
```

- *Type:* *string

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.privateEndpoint"></a>

```go
func PrivateEndpoint() *string
```

- *Type:* *string

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.privateEndpointIp"></a>

```go
func PrivateEndpointIp() *string
```

- *Type:* *string

---

##### `PrivateEndpointLabel`<sup>Required</sup> <a name="PrivateEndpointLabel" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.privateEndpointLabel"></a>

```go
func PrivateEndpointLabel() *string
```

- *Type:* *string

---

##### `RefreshableMode`<sup>Required</sup> <a name="RefreshableMode" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.refreshableMode"></a>

```go
func RefreshableMode() *string
```

- *Type:* *string

---

##### `RefreshableState`<sup>Required</sup> <a name="RefreshableState" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.refreshableState"></a>

```go
func RefreshableState() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `ScheduledOperationDetails`<sup>Required</sup> <a name="ScheduledOperationDetails" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.scheduledOperationDetails"></a>

```go
func ScheduledOperationDetails() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList</a>

---

##### `SqlWebDeveloperUrl`<sup>Required</sup> <a name="SqlWebDeveloperUrl" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.sqlWebDeveloperUrl"></a>

```go
func SqlWebDeveloperUrl() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SupportedCloneRegions`<sup>Required</sup> <a name="SupportedCloneRegions" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.supportedCloneRegions"></a>

```go
func SupportedCloneRegions() *[]*string
```

- *Type:* *[]*string

---

##### `TotalAutoBackupStorageSizeGbs`<sup>Required</sup> <a name="TotalAutoBackupStorageSizeGbs" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.totalAutoBackupStorageSizeGbs"></a>

```go
func TotalAutoBackupStorageSizeGbs() *f64
```

- *Type:* *f64

---

##### `UsedDataStorageSizeTbs`<sup>Required</sup> <a name="UsedDataStorageSizeTbs" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.usedDataStorageSizeTbs"></a>

```go
func UsedDataStorageSizeTbs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesProperties</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.stopTime">StopTime</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.startTime"></a>

```go
func StartTime() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList</a>

---

##### `StopTime`<sup>Required</sup> <a name="StopTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.stopTime"></a>

```go
func StopTime() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetails</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStartTime</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleoracledatabaseautonomousdatabases"

datagoogleoracledatabaseautonomousdatabases.NewDataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabases.DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime">DataGoogleOracleDatabaseAutonomousDatabasesAutonomousDatabasesPropertiesScheduledOperationDetailsStopTime</a>

---



