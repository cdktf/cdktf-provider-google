# `dataGoogleSqlDatabases` Submodule <a name="`dataGoogleSqlDatabases` Submodule" id="@cdktf/provider-google.dataGoogleSqlDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSqlDatabases <a name="DataGoogleSqlDatabases" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/sql_databases google_sql_databases}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabases"

datagooglesqldatabases.NewDataGoogleSqlDatabases(scope Construct, id *string, config DataGoogleSqlDatabasesConfig) DataGoogleSqlDatabases
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig">DataGoogleSqlDatabasesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig">DataGoogleSqlDatabasesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabases"

datagooglesqldatabases.DataGoogleSqlDatabases_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabases"

datagooglesqldatabases.DataGoogleSqlDatabases_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabases"

datagooglesqldatabases.DataGoogleSqlDatabases_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.databases">Databases</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList">DataGoogleSqlDatabasesDatabasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Databases`<sup>Required</sup> <a name="Databases" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.databases"></a>

```go
func Databases() DataGoogleSqlDatabasesDatabasesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList">DataGoogleSqlDatabasesDatabasesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabases.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSqlDatabasesConfig <a name="DataGoogleSqlDatabasesConfig" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabases"

&datagooglesqldatabases.DataGoogleSqlDatabasesConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Instance: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.property.instance">Instance</a></code> | <code>*string</code> | The name of the Cloud SQL database instance in which the database belongs. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/sql_databases#id DataGoogleSqlDatabases#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.property.project">Project</a></code> | <code>*string</code> | Project ID of the project that contains the instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The name of the Cloud SQL database instance in which the database belongs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/sql_databases#instance DataGoogleSqlDatabases#instance}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/sql_databases#id DataGoogleSqlDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Project ID of the project that contains the instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/sql_databases#project DataGoogleSqlDatabases#project}

---

### DataGoogleSqlDatabasesDatabases <a name="DataGoogleSqlDatabasesDatabases" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabases.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabases"

&datagooglesqldatabases.DataGoogleSqlDatabasesDatabases {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSqlDatabasesDatabasesList <a name="DataGoogleSqlDatabasesDatabasesList" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabases"

datagooglesqldatabases.NewDataGoogleSqlDatabasesDatabasesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSqlDatabasesDatabasesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.get"></a>

```go
func Get(index *f64) DataGoogleSqlDatabasesDatabasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSqlDatabasesDatabasesOutputReference <a name="DataGoogleSqlDatabasesDatabasesOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabases"

datagooglesqldatabases.NewDataGoogleSqlDatabasesDatabasesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSqlDatabasesDatabasesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.property.charset">Charset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.property.collation">Collation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabases">DataGoogleSqlDatabasesDatabases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Charset`<sup>Required</sup> <a name="Charset" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.property.charset"></a>

```go
func Charset() *string
```

- *Type:* *string

---

##### `Collation`<sup>Required</sup> <a name="Collation" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.property.collation"></a>

```go
func Collation() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabasesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSqlDatabasesDatabases
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabases.DataGoogleSqlDatabasesDatabases">DataGoogleSqlDatabasesDatabases</a>

---



