# `dataGoogleSqlDatabaseInstanceLatestRecoveryTime` Submodule <a name="`dataGoogleSqlDatabaseInstanceLatestRecoveryTime` Submodule" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSqlDatabaseInstanceLatestRecoveryTime <a name="DataGoogleSqlDatabaseInstanceLatestRecoveryTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/data-sources/sql_database_instance_latest_recovery_time google_sql_database_instance_latest_recovery_time}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datagooglesqldatabaseinstancelatestrecoverytime"

datagooglesqldatabaseinstancelatestrecoverytime.NewDataGoogleSqlDatabaseInstanceLatestRecoveryTime(scope Construct, id *string, config DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig) DataGoogleSqlDatabaseInstanceLatestRecoveryTime
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig">DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig">DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleSqlDatabaseInstanceLatestRecoveryTime resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datagooglesqldatabaseinstancelatestrecoverytime"

datagooglesqldatabaseinstancelatestrecoverytime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datagooglesqldatabaseinstancelatestrecoverytime"

datagooglesqldatabaseinstancelatestrecoverytime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datagooglesqldatabaseinstancelatestrecoverytime"

datagooglesqldatabaseinstancelatestrecoverytime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datagooglesqldatabaseinstancelatestrecoverytime"

datagooglesqldatabaseinstancelatestrecoverytime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleSqlDatabaseInstanceLatestRecoveryTime resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleSqlDatabaseInstanceLatestRecoveryTime to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleSqlDatabaseInstanceLatestRecoveryTime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/data-sources/sql_database_instance_latest_recovery_time#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleSqlDatabaseInstanceLatestRecoveryTime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.latestRecoveryTime">LatestRecoveryTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `LatestRecoveryTime`<sup>Required</sup> <a name="LatestRecoveryTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.latestRecoveryTime"></a>

```go
func LatestRecoveryTime() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTime.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig <a name="DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/datagooglesqldatabaseinstancelatestrecoverytime"

&datagooglesqldatabaseinstancelatestrecoverytime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig {
	Connection: interface{},
	Count: interface{},
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
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.property.instance">Instance</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/data-sources/sql_database_instance_latest_recovery_time#instance DataGoogleSqlDatabaseInstanceLatestRecoveryTime#instance}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/data-sources/sql_database_instance_latest_recovery_time#id DataGoogleSqlDatabaseInstanceLatestRecoveryTime#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/data-sources/sql_database_instance_latest_recovery_time#project DataGoogleSqlDatabaseInstanceLatestRecoveryTime#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/data-sources/sql_database_instance_latest_recovery_time#instance DataGoogleSqlDatabaseInstanceLatestRecoveryTime#instance}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/data-sources/sql_database_instance_latest_recovery_time#id DataGoogleSqlDatabaseInstanceLatestRecoveryTime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstanceLatestRecoveryTime.DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/data-sources/sql_database_instance_latest_recovery_time#project DataGoogleSqlDatabaseInstanceLatestRecoveryTime#project}.

---



