# `dataGoogleBigqueryTable` Submodule <a name="`dataGoogleBigqueryTable` Submodule" id="@cdktf/provider-google.dataGoogleBigqueryTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBigqueryTable <a name="DataGoogleBigqueryTable" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/bigquery_table google_bigquery_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTable(scope Construct, id *string, config DataGoogleBigqueryTableConfig) DataGoogleBigqueryTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig">DataGoogleBigqueryTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig">DataGoogleBigqueryTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleBigqueryTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.DataGoogleBigqueryTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.DataGoogleBigqueryTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.DataGoogleBigqueryTable_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.DataGoogleBigqueryTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleBigqueryTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleBigqueryTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleBigqueryTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/bigquery_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBigqueryTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.biglakeConfiguration">BiglakeConfiguration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList">DataGoogleBigqueryTableBiglakeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.clustering">Clustering</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.deletionProtection">DeletionProtection</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList">DataGoogleBigqueryTableEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.expirationTime">ExpirationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.externalCatalogTableOptions">ExternalCatalogTableOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList">DataGoogleBigqueryTableExternalCatalogTableOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.externalDataConfiguration">ExternalDataConfiguration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList">DataGoogleBigqueryTableExternalDataConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.materializedView">MaterializedView</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList">DataGoogleBigqueryTableMaterializedViewList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.maxStaleness">MaxStaleness</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.numBytes">NumBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.numLongTermBytes">NumLongTermBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.numRows">NumRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.rangePartitioning">RangePartitioning</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList">DataGoogleBigqueryTableRangePartitioningList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.resourceTags">ResourceTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.schemaForeignTypeInfo">SchemaForeignTypeInfo</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList">DataGoogleBigqueryTableSchemaForeignTypeInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableConstraints">TableConstraints</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList">DataGoogleBigqueryTableTableConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableMetadataView">TableMetadataView</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableReplicationInfo">TableReplicationInfo</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList">DataGoogleBigqueryTableTableReplicationInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.timePartitioning">TimePartitioning</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList">DataGoogleBigqueryTableTimePartitioningList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.view">View</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList">DataGoogleBigqueryTableViewList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableIdInput">TableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableId">TableId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BiglakeConfiguration`<sup>Required</sup> <a name="BiglakeConfiguration" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.biglakeConfiguration"></a>

```go
func BiglakeConfiguration() DataGoogleBigqueryTableBiglakeConfigurationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList">DataGoogleBigqueryTableBiglakeConfigurationList</a>

---

##### `Clustering`<sup>Required</sup> <a name="Clustering" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.clustering"></a>

```go
func Clustering() *[]*string
```

- *Type:* *[]*string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.deletionProtection"></a>

```go
func DeletionProtection() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() DataGoogleBigqueryTableEncryptionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList">DataGoogleBigqueryTableEncryptionConfigurationList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.expirationTime"></a>

```go
func ExpirationTime() *f64
```

- *Type:* *f64

---

##### `ExternalCatalogTableOptions`<sup>Required</sup> <a name="ExternalCatalogTableOptions" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.externalCatalogTableOptions"></a>

```go
func ExternalCatalogTableOptions() DataGoogleBigqueryTableExternalCatalogTableOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList">DataGoogleBigqueryTableExternalCatalogTableOptionsList</a>

---

##### `ExternalDataConfiguration`<sup>Required</sup> <a name="ExternalDataConfiguration" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.externalDataConfiguration"></a>

```go
func ExternalDataConfiguration() DataGoogleBigqueryTableExternalDataConfigurationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList">DataGoogleBigqueryTableExternalDataConfigurationList</a>

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.friendlyName"></a>

```go
func FriendlyName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *f64
```

- *Type:* *f64

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MaterializedView`<sup>Required</sup> <a name="MaterializedView" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.materializedView"></a>

```go
func MaterializedView() DataGoogleBigqueryTableMaterializedViewList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList">DataGoogleBigqueryTableMaterializedViewList</a>

---

##### `MaxStaleness`<sup>Required</sup> <a name="MaxStaleness" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.maxStaleness"></a>

```go
func MaxStaleness() *string
```

- *Type:* *string

---

##### `NumBytes`<sup>Required</sup> <a name="NumBytes" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.numBytes"></a>

```go
func NumBytes() *f64
```

- *Type:* *f64

---

##### `NumLongTermBytes`<sup>Required</sup> <a name="NumLongTermBytes" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.numLongTermBytes"></a>

```go
func NumLongTermBytes() *f64
```

- *Type:* *f64

---

##### `NumRows`<sup>Required</sup> <a name="NumRows" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.numRows"></a>

```go
func NumRows() *f64
```

- *Type:* *f64

---

##### `RangePartitioning`<sup>Required</sup> <a name="RangePartitioning" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.rangePartitioning"></a>

```go
func RangePartitioning() DataGoogleBigqueryTableRangePartitioningList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList">DataGoogleBigqueryTableRangePartitioningList</a>

---

##### `RequirePartitionFilter`<sup>Required</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.requirePartitionFilter"></a>

```go
func RequirePartitionFilter() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.resourceTags"></a>

```go
func ResourceTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `SchemaForeignTypeInfo`<sup>Required</sup> <a name="SchemaForeignTypeInfo" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.schemaForeignTypeInfo"></a>

```go
func SchemaForeignTypeInfo() DataGoogleBigqueryTableSchemaForeignTypeInfoList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList">DataGoogleBigqueryTableSchemaForeignTypeInfoList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `TableConstraints`<sup>Required</sup> <a name="TableConstraints" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableConstraints"></a>

```go
func TableConstraints() DataGoogleBigqueryTableTableConstraintsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList">DataGoogleBigqueryTableTableConstraintsList</a>

---

##### `TableMetadataView`<sup>Required</sup> <a name="TableMetadataView" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableMetadataView"></a>

```go
func TableMetadataView() *string
```

- *Type:* *string

---

##### `TableReplicationInfo`<sup>Required</sup> <a name="TableReplicationInfo" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableReplicationInfo"></a>

```go
func TableReplicationInfo() DataGoogleBigqueryTableTableReplicationInfoList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList">DataGoogleBigqueryTableTableReplicationInfoList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimePartitioning`<sup>Required</sup> <a name="TimePartitioning" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.timePartitioning"></a>

```go
func TimePartitioning() DataGoogleBigqueryTableTimePartitioningList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList">DataGoogleBigqueryTableTimePartitioningList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.view"></a>

```go
func View() DataGoogleBigqueryTableViewList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList">DataGoogleBigqueryTableViewList</a>

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableIdInput"></a>

```go
func TableIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableId"></a>

```go
func TableId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBigqueryTableBiglakeConfiguration <a name="DataGoogleBigqueryTableBiglakeConfiguration" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableBiglakeConfiguration {

}
```


### DataGoogleBigqueryTableConfig <a name="DataGoogleBigqueryTableConfig" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatasetId: *string,
	TableId: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.datasetId">DatasetId</a></code> | <code>*string</code> | The dataset ID to create the table in. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.tableId">TableId</a></code> | <code>*string</code> | A unique ID for the resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/bigquery_table#id DataGoogleBigqueryTable#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

The dataset ID to create the table in. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/bigquery_table#dataset_id DataGoogleBigqueryTable#dataset_id}

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.tableId"></a>

```go
TableId *string
```

- *Type:* *string

A unique ID for the resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/bigquery_table#table_id DataGoogleBigqueryTable#table_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/bigquery_table#id DataGoogleBigqueryTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/bigquery_table#project DataGoogleBigqueryTable#project}

---

### DataGoogleBigqueryTableEncryptionConfiguration <a name="DataGoogleBigqueryTableEncryptionConfiguration" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableEncryptionConfiguration {

}
```


### DataGoogleBigqueryTableExternalCatalogTableOptions <a name="DataGoogleBigqueryTableExternalCatalogTableOptions" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableExternalCatalogTableOptions {

}
```


### DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor {

}
```


### DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo {

}
```


### DataGoogleBigqueryTableExternalDataConfiguration <a name="DataGoogleBigqueryTableExternalDataConfiguration" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableExternalDataConfiguration {

}
```


### DataGoogleBigqueryTableExternalDataConfigurationAvroOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationAvroOptions" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptions {

}
```


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions {

}
```


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily {

}
```


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn {

}
```


### DataGoogleBigqueryTableExternalDataConfigurationCsvOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationCsvOptions" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptions {

}
```


### DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions {

}
```


### DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions {

}
```


### DataGoogleBigqueryTableExternalDataConfigurationJsonOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationJsonOptions" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptions {

}
```


### DataGoogleBigqueryTableExternalDataConfigurationParquetOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationParquetOptions" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptions {

}
```


### DataGoogleBigqueryTableMaterializedView <a name="DataGoogleBigqueryTableMaterializedView" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedView.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableMaterializedView {

}
```


### DataGoogleBigqueryTableRangePartitioning <a name="DataGoogleBigqueryTableRangePartitioning" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioning.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableRangePartitioning {

}
```


### DataGoogleBigqueryTableRangePartitioningRange <a name="DataGoogleBigqueryTableRangePartitioningRange" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableRangePartitioningRange {

}
```


### DataGoogleBigqueryTableSchemaForeignTypeInfo <a name="DataGoogleBigqueryTableSchemaForeignTypeInfo" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableSchemaForeignTypeInfo {

}
```


### DataGoogleBigqueryTableTableConstraints <a name="DataGoogleBigqueryTableTableConstraints" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableTableConstraints {

}
```


### DataGoogleBigqueryTableTableConstraintsForeignKeys <a name="DataGoogleBigqueryTableTableConstraintsForeignKeys" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableTableConstraintsForeignKeys {

}
```


### DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences {

}
```


### DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable {

}
```


### DataGoogleBigqueryTableTableConstraintsPrimaryKey <a name="DataGoogleBigqueryTableTableConstraintsPrimaryKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableTableConstraintsPrimaryKey {

}
```


### DataGoogleBigqueryTableTableReplicationInfo <a name="DataGoogleBigqueryTableTableReplicationInfo" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableTableReplicationInfo {

}
```


### DataGoogleBigqueryTableTimePartitioning <a name="DataGoogleBigqueryTableTimePartitioning" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioning.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableTimePartitioning {

}
```


### DataGoogleBigqueryTableView <a name="DataGoogleBigqueryTableView" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableView.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

&datagooglebigquerytable.DataGoogleBigqueryTableView {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBigqueryTableBiglakeConfigurationList <a name="DataGoogleBigqueryTableBiglakeConfigurationList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableBiglakeConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableBiglakeConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableBiglakeConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableBiglakeConfigurationOutputReference <a name="DataGoogleBigqueryTableBiglakeConfigurationOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableBiglakeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableBiglakeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.fileFormat">FileFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.storageUri">StorageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.tableFormat">TableFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfiguration">DataGoogleBigqueryTableBiglakeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `FileFormat`<sup>Required</sup> <a name="FileFormat" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.fileFormat"></a>

```go
func FileFormat() *string
```

- *Type:* *string

---

##### `StorageUri`<sup>Required</sup> <a name="StorageUri" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.storageUri"></a>

```go
func StorageUri() *string
```

- *Type:* *string

---

##### `TableFormat`<sup>Required</sup> <a name="TableFormat" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.tableFormat"></a>

```go
func TableFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableBiglakeConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfiguration">DataGoogleBigqueryTableBiglakeConfiguration</a>

---


### DataGoogleBigqueryTableEncryptionConfigurationList <a name="DataGoogleBigqueryTableEncryptionConfigurationList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableEncryptionConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableEncryptionConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableEncryptionConfigurationOutputReference <a name="DataGoogleBigqueryTableEncryptionConfigurationOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyVersion">KmsKeyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfiguration">DataGoogleBigqueryTableEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `KmsKeyVersion`<sup>Required</sup> <a name="KmsKeyVersion" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```go
func KmsKeyVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfiguration">DataGoogleBigqueryTableEncryptionConfiguration</a>

---


### DataGoogleBigqueryTableExternalCatalogTableOptionsList <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalCatalogTableOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableExternalCatalogTableOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.parameters">Parameters</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.storageDescriptor">StorageDescriptor</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptions">DataGoogleBigqueryTableExternalCatalogTableOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.parameters"></a>

```go
func Parameters() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `StorageDescriptor`<sup>Required</sup> <a name="StorageDescriptor" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.storageDescriptor"></a>

```go
func StorageDescriptor() DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableExternalCatalogTableOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptions">DataGoogleBigqueryTableExternalCatalogTableOptions</a>

---


### DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.inputFormat">InputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.locationUri">LocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.serdeInfo">SerdeInfo</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputFormat`<sup>Required</sup> <a name="InputFormat" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.inputFormat"></a>

```go
func InputFormat() *string
```

- *Type:* *string

---

##### `LocationUri`<sup>Required</sup> <a name="LocationUri" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.locationUri"></a>

```go
func LocationUri() *string
```

- *Type:* *string

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.outputFormat"></a>

```go
func OutputFormat() *string
```

- *Type:* *string

---

##### `SerdeInfo`<sup>Required</sup> <a name="SerdeInfo" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.serdeInfo"></a>

```go
func SerdeInfo() DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor</a>

---


### DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.parameters">Parameters</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary">SerializationLibrary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```go
func Parameters() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `SerializationLibrary`<sup>Required</sup> <a name="SerializationLibrary" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary"></a>

```go
func SerializationLibrary() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypes">UseAvroLogicalTypes</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptions">DataGoogleBigqueryTableExternalDataConfigurationAvroOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UseAvroLogicalTypes`<sup>Required</sup> <a name="UseAvroLogicalTypes" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypes"></a>

```go
func UseAvroLogicalTypes() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableExternalDataConfigurationAvroOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptions">DataGoogleBigqueryTableExternalDataConfigurationAvroOptions</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fieldName">FieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.onlyReadLatest">OnlyReadLatest</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierEncoded">QualifierEncoded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierString">QualifierString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fieldName"></a>

```go
func FieldName() *string
```

- *Type:* *string

---

##### `OnlyReadLatest`<sup>Required</sup> <a name="OnlyReadLatest" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.onlyReadLatest"></a>

```go
func OnlyReadLatest() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `QualifierEncoded`<sup>Required</sup> <a name="QualifierEncoded" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierEncoded"></a>

```go
func QualifierEncoded() *string
```

- *Type:* *string

---

##### `QualifierString`<sup>Required</sup> <a name="QualifierString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierString"></a>

```go
func QualifierString() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.column">Column</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.familyId">FamilyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.onlyReadLatest">OnlyReadLatest</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.column"></a>

```go
func Column() DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList</a>

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `FamilyId`<sup>Required</sup> <a name="FamilyId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.familyId"></a>

```go
func FamilyId() *string
```

- *Type:* *string

---

##### `OnlyReadLatest`<sup>Required</sup> <a name="OnlyReadLatest" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.onlyReadLatest"></a>

```go
func OnlyReadLatest() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.columnFamily">ColumnFamily</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.ignoreUnspecifiedColumnFamilies">IgnoreUnspecifiedColumnFamilies</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.outputColumnFamiliesAsJson">OutputColumnFamiliesAsJson</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.readRowkeyAsString">ReadRowkeyAsString</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnFamily`<sup>Required</sup> <a name="ColumnFamily" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.columnFamily"></a>

```go
func ColumnFamily() DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList</a>

---

##### `IgnoreUnspecifiedColumnFamilies`<sup>Required</sup> <a name="IgnoreUnspecifiedColumnFamilies" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.ignoreUnspecifiedColumnFamilies"></a>

```go
func IgnoreUnspecifiedColumnFamilies() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OutputColumnFamiliesAsJson`<sup>Required</sup> <a name="OutputColumnFamiliesAsJson" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.outputColumnFamiliesAsJson"></a>

```go
func OutputColumnFamiliesAsJson() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ReadRowkeyAsString`<sup>Required</sup> <a name="ReadRowkeyAsString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.readRowkeyAsString"></a>

```go
func ReadRowkeyAsString() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRows">AllowJaggedRows</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlines">AllowQuotedNewlines</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quote">Quote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRows">SkipLeadingRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptions">DataGoogleBigqueryTableExternalDataConfigurationCsvOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowJaggedRows`<sup>Required</sup> <a name="AllowJaggedRows" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRows"></a>

```go
func AllowJaggedRows() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AllowQuotedNewlines`<sup>Required</sup> <a name="AllowQuotedNewlines" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlines"></a>

```go
func AllowQuotedNewlines() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `Quote`<sup>Required</sup> <a name="Quote" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quote"></a>

```go
func Quote() *string
```

- *Type:* *string

---

##### `SkipLeadingRows`<sup>Required</sup> <a name="SkipLeadingRows" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRows"></a>

```go
func SkipLeadingRows() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableExternalDataConfigurationCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptions">DataGoogleBigqueryTableExternalDataConfigurationCsvOptions</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.range">Range</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRows">SkipLeadingRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions">DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.range"></a>

```go
func Range() *string
```

- *Type:* *string

---

##### `SkipLeadingRows`<sup>Required</sup> <a name="SkipLeadingRows" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRows"></a>

```go
func SkipLeadingRows() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions">DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefix">SourceUriPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions">DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `RequirePartitionFilter`<sup>Required</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilter"></a>

```go
func RequirePartitionFilter() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SourceUriPrefix`<sup>Required</sup> <a name="SourceUriPrefix" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefix"></a>

```go
func SourceUriPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions">DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptions">DataGoogleBigqueryTableExternalDataConfigurationJsonOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableExternalDataConfigurationJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptions">DataGoogleBigqueryTableExternalDataConfigurationJsonOptions</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationList <a name="DataGoogleBigqueryTableExternalDataConfigurationList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalDataConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableExternalDataConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableExternalDataConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableExternalDataConfigurationOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalDataConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableExternalDataConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.autodetect">Autodetect</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.avroOptions">AvroOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList">DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.bigtableOptions">BigtableOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList">DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecType">FileSetSpecType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptions">GoogleSheetsOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList">DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptions">HivePartitioningOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList">DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValues">IgnoreUnknownValues</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonExtension">JsonExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonOptions">JsonOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList">DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecords">MaxBadRecords</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheMode">MetadataCacheMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.objectMetadata">ObjectMetadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.parquetOptions">ParquetOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList">DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUri">ReferenceFileSchemaUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceFormat">SourceFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceUris">SourceUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfiguration">DataGoogleBigqueryTableExternalDataConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Autodetect`<sup>Required</sup> <a name="Autodetect" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.autodetect"></a>

```go
func Autodetect() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AvroOptions`<sup>Required</sup> <a name="AvroOptions" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.avroOptions"></a>

```go
func AvroOptions() DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList">DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList</a>

---

##### `BigtableOptions`<sup>Required</sup> <a name="BigtableOptions" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.bigtableOptions"></a>

```go
func BigtableOptions() DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList</a>

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `CsvOptions`<sup>Required</sup> <a name="CsvOptions" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.csvOptions"></a>

```go
func CsvOptions() DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList">DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList</a>

---

##### `FileSetSpecType`<sup>Required</sup> <a name="FileSetSpecType" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecType"></a>

```go
func FileSetSpecType() *string
```

- *Type:* *string

---

##### `GoogleSheetsOptions`<sup>Required</sup> <a name="GoogleSheetsOptions" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptions"></a>

```go
func GoogleSheetsOptions() DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList">DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList</a>

---

##### `HivePartitioningOptions`<sup>Required</sup> <a name="HivePartitioningOptions" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptions"></a>

```go
func HivePartitioningOptions() DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList">DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList</a>

---

##### `IgnoreUnknownValues`<sup>Required</sup> <a name="IgnoreUnknownValues" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValues"></a>

```go
func IgnoreUnknownValues() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `JsonExtension`<sup>Required</sup> <a name="JsonExtension" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonExtension"></a>

```go
func JsonExtension() *string
```

- *Type:* *string

---

##### `JsonOptions`<sup>Required</sup> <a name="JsonOptions" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonOptions"></a>

```go
func JsonOptions() DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList">DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList</a>

---

##### `MaxBadRecords`<sup>Required</sup> <a name="MaxBadRecords" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecords"></a>

```go
func MaxBadRecords() *f64
```

- *Type:* *f64

---

##### `MetadataCacheMode`<sup>Required</sup> <a name="MetadataCacheMode" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheMode"></a>

```go
func MetadataCacheMode() *string
```

- *Type:* *string

---

##### `ObjectMetadata`<sup>Required</sup> <a name="ObjectMetadata" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.objectMetadata"></a>

```go
func ObjectMetadata() *string
```

- *Type:* *string

---

##### `ParquetOptions`<sup>Required</sup> <a name="ParquetOptions" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.parquetOptions"></a>

```go
func ParquetOptions() DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList">DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList</a>

---

##### `ReferenceFileSchemaUri`<sup>Required</sup> <a name="ReferenceFileSchemaUri" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUri"></a>

```go
func ReferenceFileSchemaUri() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `SourceFormat`<sup>Required</sup> <a name="SourceFormat" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceFormat"></a>

```go
func SourceFormat() *string
```

- *Type:* *string

---

##### `SourceUris`<sup>Required</sup> <a name="SourceUris" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceUris"></a>

```go
func SourceUris() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableExternalDataConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfiguration">DataGoogleBigqueryTableExternalDataConfiguration</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInference">EnableListInference</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsString">EnumAsString</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptions">DataGoogleBigqueryTableExternalDataConfigurationParquetOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableListInference`<sup>Required</sup> <a name="EnableListInference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInference"></a>

```go
func EnableListInference() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnumAsString`<sup>Required</sup> <a name="EnumAsString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsString"></a>

```go
func EnumAsString() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableExternalDataConfigurationParquetOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptions">DataGoogleBigqueryTableExternalDataConfigurationParquetOptions</a>

---


### DataGoogleBigqueryTableMaterializedViewList <a name="DataGoogleBigqueryTableMaterializedViewList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableMaterializedViewList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableMaterializedViewList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableMaterializedViewOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableMaterializedViewOutputReference <a name="DataGoogleBigqueryTableMaterializedViewOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableMaterializedViewOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableMaterializedViewOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinition">AllowNonIncrementalDefinition</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.enableRefresh">EnableRefresh</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.refreshIntervalMs">RefreshIntervalMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedView">DataGoogleBigqueryTableMaterializedView</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowNonIncrementalDefinition`<sup>Required</sup> <a name="AllowNonIncrementalDefinition" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinition"></a>

```go
func AllowNonIncrementalDefinition() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableRefresh`<sup>Required</sup> <a name="EnableRefresh" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.enableRefresh"></a>

```go
func EnableRefresh() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `RefreshIntervalMs`<sup>Required</sup> <a name="RefreshIntervalMs" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.refreshIntervalMs"></a>

```go
func RefreshIntervalMs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableMaterializedView
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedView">DataGoogleBigqueryTableMaterializedView</a>

---


### DataGoogleBigqueryTableRangePartitioningList <a name="DataGoogleBigqueryTableRangePartitioningList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableRangePartitioningList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableRangePartitioningList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableRangePartitioningOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableRangePartitioningOutputReference <a name="DataGoogleBigqueryTableRangePartitioningOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableRangePartitioningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableRangePartitioningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList">DataGoogleBigqueryTableRangePartitioningRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioning">DataGoogleBigqueryTableRangePartitioning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.range"></a>

```go
func Range() DataGoogleBigqueryTableRangePartitioningRangeList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList">DataGoogleBigqueryTableRangePartitioningRangeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableRangePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioning">DataGoogleBigqueryTableRangePartitioning</a>

---


### DataGoogleBigqueryTableRangePartitioningRangeList <a name="DataGoogleBigqueryTableRangePartitioningRangeList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableRangePartitioningRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableRangePartitioningRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableRangePartitioningRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableRangePartitioningRangeOutputReference <a name="DataGoogleBigqueryTableRangePartitioningRangeOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableRangePartitioningRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableRangePartitioningRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.end">End</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.start">Start</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRange">DataGoogleBigqueryTableRangePartitioningRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.end"></a>

```go
func End() *f64
```

- *Type:* *f64

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.start"></a>

```go
func Start() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableRangePartitioningRange
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRange">DataGoogleBigqueryTableRangePartitioningRange</a>

---


### DataGoogleBigqueryTableSchemaForeignTypeInfoList <a name="DataGoogleBigqueryTableSchemaForeignTypeInfoList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableSchemaForeignTypeInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableSchemaForeignTypeInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference <a name="DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.typeSystem">TypeSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfo">DataGoogleBigqueryTableSchemaForeignTypeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeSystem`<sup>Required</sup> <a name="TypeSystem" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.typeSystem"></a>

```go
func TypeSystem() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableSchemaForeignTypeInfo
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfo">DataGoogleBigqueryTableSchemaForeignTypeInfo</a>

---


### DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumn">ReferencedColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumn">ReferencingColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences">DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReferencedColumn`<sup>Required</sup> <a name="ReferencedColumn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumn"></a>

```go
func ReferencedColumn() *string
```

- *Type:* *string

---

##### `ReferencingColumn`<sup>Required</sup> <a name="ReferencingColumn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumn"></a>

```go
func ReferencingColumn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences">DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences</a>

---


### DataGoogleBigqueryTableTableConstraintsForeignKeysList <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableTableConstraintsForeignKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableTableConstraintsForeignKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferences">ColumnReferences</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList">DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTable">ReferencedTable</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList">DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeys">DataGoogleBigqueryTableTableConstraintsForeignKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnReferences`<sup>Required</sup> <a name="ColumnReferences" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferences"></a>

```go
func ColumnReferences() DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList">DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReferencedTable`<sup>Required</sup> <a name="ReferencedTable" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTable"></a>

```go
func ReferencedTable() DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList">DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableTableConstraintsForeignKeys
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeys">DataGoogleBigqueryTableTableConstraintsForeignKeys</a>

---


### DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableId">TableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable">DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableId"></a>

```go
func TableId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable">DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable</a>

---


### DataGoogleBigqueryTableTableConstraintsList <a name="DataGoogleBigqueryTableTableConstraintsList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableTableConstraintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableTableConstraintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableTableConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableTableConstraintsOutputReference <a name="DataGoogleBigqueryTableTableConstraintsOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableTableConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableTableConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.foreignKeys">ForeignKeys</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList">DataGoogleBigqueryTableTableConstraintsForeignKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.primaryKey">PrimaryKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList">DataGoogleBigqueryTableTableConstraintsPrimaryKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraints">DataGoogleBigqueryTableTableConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForeignKeys`<sup>Required</sup> <a name="ForeignKeys" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.foreignKeys"></a>

```go
func ForeignKeys() DataGoogleBigqueryTableTableConstraintsForeignKeysList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList">DataGoogleBigqueryTableTableConstraintsForeignKeysList</a>

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.primaryKey"></a>

```go
func PrimaryKey() DataGoogleBigqueryTableTableConstraintsPrimaryKeyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList">DataGoogleBigqueryTableTableConstraintsPrimaryKeyList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableTableConstraints
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraints">DataGoogleBigqueryTableTableConstraints</a>

---


### DataGoogleBigqueryTableTableConstraintsPrimaryKeyList <a name="DataGoogleBigqueryTableTableConstraintsPrimaryKeyList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableTableConstraintsPrimaryKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableTableConstraintsPrimaryKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference <a name="DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columns">Columns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKey">DataGoogleBigqueryTableTableConstraintsPrimaryKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columns"></a>

```go
func Columns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableTableConstraintsPrimaryKey
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKey">DataGoogleBigqueryTableTableConstraintsPrimaryKey</a>

---


### DataGoogleBigqueryTableTableReplicationInfoList <a name="DataGoogleBigqueryTableTableReplicationInfoList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableTableReplicationInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableTableReplicationInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableTableReplicationInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableTableReplicationInfoOutputReference <a name="DataGoogleBigqueryTableTableReplicationInfoOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableTableReplicationInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableTableReplicationInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMs">ReplicationIntervalMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetId">SourceDatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceProjectId">SourceProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceTableId">SourceTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfo">DataGoogleBigqueryTableTableReplicationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReplicationIntervalMs`<sup>Required</sup> <a name="ReplicationIntervalMs" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMs"></a>

```go
func ReplicationIntervalMs() *f64
```

- *Type:* *f64

---

##### `SourceDatasetId`<sup>Required</sup> <a name="SourceDatasetId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetId"></a>

```go
func SourceDatasetId() *string
```

- *Type:* *string

---

##### `SourceProjectId`<sup>Required</sup> <a name="SourceProjectId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceProjectId"></a>

```go
func SourceProjectId() *string
```

- *Type:* *string

---

##### `SourceTableId`<sup>Required</sup> <a name="SourceTableId" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceTableId"></a>

```go
func SourceTableId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableTableReplicationInfo
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfo">DataGoogleBigqueryTableTableReplicationInfo</a>

---


### DataGoogleBigqueryTableTimePartitioningList <a name="DataGoogleBigqueryTableTimePartitioningList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableTimePartitioningList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableTimePartitioningList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableTimePartitioningOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableTimePartitioningOutputReference <a name="DataGoogleBigqueryTableTimePartitioningOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableTimePartitioningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableTimePartitioningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.expirationMs">ExpirationMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioning">DataGoogleBigqueryTableTimePartitioning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpirationMs`<sup>Required</sup> <a name="ExpirationMs" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.expirationMs"></a>

```go
func ExpirationMs() *f64
```

- *Type:* *f64

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `RequirePartitionFilter`<sup>Required</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.requirePartitionFilter"></a>

```go
func RequirePartitionFilter() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioning">DataGoogleBigqueryTableTimePartitioning</a>

---


### DataGoogleBigqueryTableViewList <a name="DataGoogleBigqueryTableViewList" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableViewList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBigqueryTableViewList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.get"></a>

```go
func Get(index *f64) DataGoogleBigqueryTableViewOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBigqueryTableViewOutputReference <a name="DataGoogleBigqueryTableViewOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglebigquerytable"

datagooglebigquerytable.NewDataGoogleBigqueryTableViewOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBigqueryTableViewOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.useLegacySql">UseLegacySql</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableView">DataGoogleBigqueryTableView</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `UseLegacySql`<sup>Required</sup> <a name="UseLegacySql" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.useLegacySql"></a>

```go
func UseLegacySql() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBigqueryTableView
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryTable.DataGoogleBigqueryTableView">DataGoogleBigqueryTableView</a>

---



