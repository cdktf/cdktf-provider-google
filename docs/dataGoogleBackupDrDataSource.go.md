# `dataGoogleBackupDrDataSource` Submodule <a name="`dataGoogleBackupDrDataSource` Submodule" id="@cdktf/provider-google.dataGoogleBackupDrDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrDataSource <a name="DataGoogleBackupDrDataSource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/backup_dr_data_source google_backup_dr_data_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

datagooglebackupdrdatasource.NewDataGoogleBackupDrDataSource(scope Construct, id *string, config DataGoogleBackupDrDataSourceConfig) DataGoogleBackupDrDataSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig">DataGoogleBackupDrDataSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig">DataGoogleBackupDrDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleBackupDrDataSource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

datagooglebackupdrdatasource.DataGoogleBackupDrDataSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

datagooglebackupdrdatasource.DataGoogleBackupDrDataSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

datagooglebackupdrdatasource.DataGoogleBackupDrDataSource_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

datagooglebackupdrdatasource.DataGoogleBackupDrDataSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleBackupDrDataSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleBackupDrDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleBackupDrDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/backup_dr_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupConfigInfo">BackupConfigInfo</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList">DataGoogleBackupDrDataSourceBackupConfigInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupCount">BackupCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.configState">ConfigState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceBackupApplianceApplication">DataSourceBackupApplianceApplication</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList">DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceGcpResource">DataSourceGcpResource</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList">DataGoogleBackupDrDataSourceDataSourceGcpResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.totalStoredBytes">TotalStoredBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupVaultIdInput">BackupVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceIdInput">DataSourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupVaultId">BackupVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BackupConfigInfo`<sup>Required</sup> <a name="BackupConfigInfo" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupConfigInfo"></a>

```go
func BackupConfigInfo() DataGoogleBackupDrDataSourceBackupConfigInfoList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList">DataGoogleBackupDrDataSourceBackupConfigInfoList</a>

---

##### `BackupCount`<sup>Required</sup> <a name="BackupCount" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupCount"></a>

```go
func BackupCount() *string
```

- *Type:* *string

---

##### `ConfigState`<sup>Required</sup> <a name="ConfigState" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.configState"></a>

```go
func ConfigState() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DataSourceBackupApplianceApplication`<sup>Required</sup> <a name="DataSourceBackupApplianceApplication" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceBackupApplianceApplication"></a>

```go
func DataSourceBackupApplianceApplication() DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList">DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList</a>

---

##### `DataSourceGcpResource`<sup>Required</sup> <a name="DataSourceGcpResource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceGcpResource"></a>

```go
func DataSourceGcpResource() DataGoogleBackupDrDataSourceDataSourceGcpResourceList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList">DataGoogleBackupDrDataSourceDataSourceGcpResourceList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TotalStoredBytes`<sup>Required</sup> <a name="TotalStoredBytes" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.totalStoredBytes"></a>

```go
func TotalStoredBytes() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BackupVaultIdInput`<sup>Optional</sup> <a name="BackupVaultIdInput" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupVaultIdInput"></a>

```go
func BackupVaultIdInput() *string
```

- *Type:* *string

---

##### `DataSourceIdInput`<sup>Optional</sup> <a name="DataSourceIdInput" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceIdInput"></a>

```go
func DataSourceIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupVaultId"></a>

```go
func BackupVaultId() *string
```

- *Type:* *string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrDataSourceBackupConfigInfo <a name="DataGoogleBackupDrDataSourceBackupConfigInfo" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

&datagooglebackupdrdatasource.DataGoogleBackupDrDataSourceBackupConfigInfo {

}
```


### DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig <a name="DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

&datagooglebackupdrdatasource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig {

}
```


### DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig <a name="DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

&datagooglebackupdrdatasource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig {

}
```


### DataGoogleBackupDrDataSourceConfig <a name="DataGoogleBackupDrDataSourceConfig" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

&datagooglebackupdrdatasource.DataGoogleBackupDrDataSourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackupVaultId: *string,
	DataSourceId: *string,
	Location: *string,
	Project: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.backupVaultId">BackupVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/backup_dr_data_source#backup_vault_id DataGoogleBackupDrDataSource#backup_vault_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/backup_dr_data_source#data_source_id DataGoogleBackupDrDataSource#data_source_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/backup_dr_data_source#location DataGoogleBackupDrDataSource#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/backup_dr_data_source#project DataGoogleBackupDrDataSource#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/backup_dr_data_source#id DataGoogleBackupDrDataSource#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.backupVaultId"></a>

```go
BackupVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/backup_dr_data_source#backup_vault_id DataGoogleBackupDrDataSource#backup_vault_id}.

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.dataSourceId"></a>

```go
DataSourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/backup_dr_data_source#data_source_id DataGoogleBackupDrDataSource#data_source_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/backup_dr_data_source#location DataGoogleBackupDrDataSource#location}.

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/backup_dr_data_source#project DataGoogleBackupDrDataSource#project}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/backup_dr_data_source#id DataGoogleBackupDrDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication <a name="DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

&datagooglebackupdrdatasource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication {

}
```


### DataGoogleBackupDrDataSourceDataSourceGcpResource <a name="DataGoogleBackupDrDataSourceDataSourceGcpResource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

&datagooglebackupdrdatasource.DataGoogleBackupDrDataSourceDataSourceGcpResource {

}
```


### DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties <a name="DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

&datagooglebackupdrdatasource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList <a name="DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

datagooglebackupdrdatasource.NewDataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference <a name="DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

datagooglebackupdrdatasource.NewDataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceId">BackupApplianceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceName">BackupApplianceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slaId">SlaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slpName">SlpName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.sltName">SltName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig">DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `BackupApplianceId`<sup>Required</sup> <a name="BackupApplianceId" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceId"></a>

```go
func BackupApplianceId() *string
```

- *Type:* *string

---

##### `BackupApplianceName`<sup>Required</sup> <a name="BackupApplianceName" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceName"></a>

```go
func BackupApplianceName() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `SlaId`<sup>Required</sup> <a name="SlaId" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slaId"></a>

```go
func SlaId() *string
```

- *Type:* *string

---

##### `SlpName`<sup>Required</sup> <a name="SlpName" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slpName"></a>

```go
func SlpName() *string
```

- *Type:* *string

---

##### `SltName`<sup>Required</sup> <a name="SltName" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.sltName"></a>

```go
func SltName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig">DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig</a>

---


### DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList <a name="DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

datagooglebackupdrdatasource.NewDataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference <a name="DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

datagooglebackupdrdatasource.NewDataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlan">BackupPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanAssociation">BackupPlanAssociation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanDescription">BackupPlanDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanRules">BackupPlanRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig">DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlan"></a>

```go
func BackupPlan() *string
```

- *Type:* *string

---

##### `BackupPlanAssociation`<sup>Required</sup> <a name="BackupPlanAssociation" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanAssociation"></a>

```go
func BackupPlanAssociation() *string
```

- *Type:* *string

---

##### `BackupPlanDescription`<sup>Required</sup> <a name="BackupPlanDescription" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanDescription"></a>

```go
func BackupPlanDescription() *string
```

- *Type:* *string

---

##### `BackupPlanRules`<sup>Required</sup> <a name="BackupPlanRules" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanRules"></a>

```go
func BackupPlanRules() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig">DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig</a>

---


### DataGoogleBackupDrDataSourceBackupConfigInfoList <a name="DataGoogleBackupDrDataSourceBackupConfigInfoList" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

datagooglebackupdrdatasource.NewDataGoogleBackupDrDataSourceBackupConfigInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrDataSourceBackupConfigInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference <a name="DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

datagooglebackupdrdatasource.NewDataGoogleBackupDrDataSourceBackupConfigInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.backupApplianceBackupConfig">BackupApplianceBackupConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList">DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.gcpBackupConfig">GcpBackupConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList">DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.lastBackupError">LastBackupError</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.lastBackupState">LastBackupState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime">LastSuccessfulBackupConsistencyTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfo">DataGoogleBackupDrDataSourceBackupConfigInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupApplianceBackupConfig`<sup>Required</sup> <a name="BackupApplianceBackupConfig" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.backupApplianceBackupConfig"></a>

```go
func BackupApplianceBackupConfig() DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList">DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList</a>

---

##### `GcpBackupConfig`<sup>Required</sup> <a name="GcpBackupConfig" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.gcpBackupConfig"></a>

```go
func GcpBackupConfig() DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList">DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList</a>

---

##### `LastBackupError`<sup>Required</sup> <a name="LastBackupError" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.lastBackupError"></a>

```go
func LastBackupError() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `LastBackupState`<sup>Required</sup> <a name="LastBackupState" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.lastBackupState"></a>

```go
func LastBackupState() *string
```

- *Type:* *string

---

##### `LastSuccessfulBackupConsistencyTime`<sup>Required</sup> <a name="LastSuccessfulBackupConsistencyTime" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime"></a>

```go
func LastSuccessfulBackupConsistencyTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrDataSourceBackupConfigInfo
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfo">DataGoogleBackupDrDataSourceBackupConfigInfo</a>

---


### DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList <a name="DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

datagooglebackupdrdatasource.NewDataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference <a name="DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

datagooglebackupdrdatasource.NewDataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.applianceId">ApplianceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.backupAppliance">BackupAppliance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.hostId">HostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication">DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplianceId`<sup>Required</sup> <a name="ApplianceId" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.applianceId"></a>

```go
func ApplianceId() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `BackupAppliance`<sup>Required</sup> <a name="BackupAppliance" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.backupAppliance"></a>

```go
func BackupAppliance() *string
```

- *Type:* *string

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.hostId"></a>

```go
func HostId() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication">DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication</a>

---


### DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList <a name="DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

datagooglebackupdrdatasource.NewDataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference <a name="DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

datagooglebackupdrdatasource.NewDataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskCount">TotalDiskCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskSizeGb">TotalDiskSizeGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties">DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TotalDiskCount`<sup>Required</sup> <a name="TotalDiskCount" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskCount"></a>

```go
func TotalDiskCount() *string
```

- *Type:* *string

---

##### `TotalDiskSizeGb`<sup>Required</sup> <a name="TotalDiskSizeGb" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskSizeGb"></a>

```go
func TotalDiskSizeGb() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties">DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties</a>

---


### DataGoogleBackupDrDataSourceDataSourceGcpResourceList <a name="DataGoogleBackupDrDataSourceDataSourceGcpResourceList" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

datagooglebackupdrdatasource.NewDataGoogleBackupDrDataSourceDataSourceGcpResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrDataSourceDataSourceGcpResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference <a name="DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebackupdrdatasource"

datagooglebackupdrdatasource.NewDataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.computeInstanceDataSourceProperties">ComputeInstanceDataSourceProperties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList">DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.gcpResourcename">GcpResourcename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResource">DataGoogleBackupDrDataSourceDataSourceGcpResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeInstanceDataSourceProperties`<sup>Required</sup> <a name="ComputeInstanceDataSourceProperties" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.computeInstanceDataSourceProperties"></a>

```go
func ComputeInstanceDataSourceProperties() DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList">DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList</a>

---

##### `GcpResourcename`<sup>Required</sup> <a name="GcpResourcename" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.gcpResourcename"></a>

```go
func GcpResourcename() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrDataSourceDataSourceGcpResource
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResource">DataGoogleBackupDrDataSourceDataSourceGcpResource</a>

---



