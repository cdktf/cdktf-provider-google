# `dataGoogleCloudAssetSearchAllResources` Submodule <a name="`dataGoogleCloudAssetSearchAllResources` Submodule" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudAssetSearchAllResources <a name="DataGoogleCloudAssetSearchAllResources" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloud_asset_search_all_resources google_cloud_asset_search_all_resources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudassetsearchallresources"

datagooglecloudassetsearchallresources.NewDataGoogleCloudAssetSearchAllResources(scope Construct, id *string, config DataGoogleCloudAssetSearchAllResourcesConfig) DataGoogleCloudAssetSearchAllResources
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig">DataGoogleCloudAssetSearchAllResourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig">DataGoogleCloudAssetSearchAllResourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetAssetTypes">ResetAssetTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAssetTypes` <a name="ResetAssetTypes" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetAssetTypes"></a>

```go
func ResetAssetTypes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetId"></a>

```go
func ResetId()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetQuery"></a>

```go
func ResetQuery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudAssetSearchAllResources resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudassetsearchallresources"

datagooglecloudassetsearchallresources.DataGoogleCloudAssetSearchAllResources_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudassetsearchallresources"

datagooglecloudassetsearchallresources.DataGoogleCloudAssetSearchAllResources_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudassetsearchallresources"

datagooglecloudassetsearchallresources.DataGoogleCloudAssetSearchAllResources_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudassetsearchallresources"

datagooglecloudassetsearchallresources.DataGoogleCloudAssetSearchAllResources_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleCloudAssetSearchAllResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleCloudAssetSearchAllResources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleCloudAssetSearchAllResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloud_asset_search_all_resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudAssetSearchAllResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.results">Results</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList">DataGoogleCloudAssetSearchAllResourcesResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.assetTypesInput">AssetTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.assetTypes">AssetTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.results"></a>

```go
func Results() DataGoogleCloudAssetSearchAllResourcesResultsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList">DataGoogleCloudAssetSearchAllResourcesResultsList</a>

---

##### `AssetTypesInput`<sup>Optional</sup> <a name="AssetTypesInput" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.assetTypesInput"></a>

```go
func AssetTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `AssetTypes`<sup>Required</sup> <a name="AssetTypes" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.assetTypes"></a>

```go
func AssetTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudAssetSearchAllResourcesConfig <a name="DataGoogleCloudAssetSearchAllResourcesConfig" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudassetsearchallresources"

&datagooglecloudassetsearchallresources.DataGoogleCloudAssetSearchAllResourcesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Scope: *string,
	AssetTypes: *[]*string,
	Id: *string,
	Query: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloud_asset_search_all_resources#scope DataGoogleCloudAssetSearchAllResources#scope}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.assetTypes">AssetTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloud_asset_search_all_resources#asset_types DataGoogleCloudAssetSearchAllResources#asset_types}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloud_asset_search_all_resources#id DataGoogleCloudAssetSearchAllResources#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.query">Query</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloud_asset_search_all_resources#query DataGoogleCloudAssetSearchAllResources#query}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloud_asset_search_all_resources#scope DataGoogleCloudAssetSearchAllResources#scope}.

---

##### `AssetTypes`<sup>Optional</sup> <a name="AssetTypes" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.assetTypes"></a>

```go
AssetTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloud_asset_search_all_resources#asset_types DataGoogleCloudAssetSearchAllResources#asset_types}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloud_asset_search_all_resources#id DataGoogleCloudAssetSearchAllResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.query"></a>

```go
Query *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloud_asset_search_all_resources#query DataGoogleCloudAssetSearchAllResources#query}.

---

### DataGoogleCloudAssetSearchAllResourcesResults <a name="DataGoogleCloudAssetSearchAllResourcesResults" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudassetsearchallresources"

&datagooglecloudassetsearchallresources.DataGoogleCloudAssetSearchAllResourcesResults {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudAssetSearchAllResourcesResultsList <a name="DataGoogleCloudAssetSearchAllResourcesResultsList" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudassetsearchallresources"

datagooglecloudassetsearchallresources.NewDataGoogleCloudAssetSearchAllResourcesResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudAssetSearchAllResourcesResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.get"></a>

```go
func Get(index *f64) DataGoogleCloudAssetSearchAllResourcesResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudAssetSearchAllResourcesResultsOutputReference <a name="DataGoogleCloudAssetSearchAllResourcesResultsOutputReference" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudassetsearchallresources"

datagooglecloudassetsearchallresources.NewDataGoogleCloudAssetSearchAllResourcesResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudAssetSearchAllResourcesResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.assetType">AssetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.folders">Folders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.kmsKeys">KmsKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.networkTags">NetworkTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.parentAssetType">ParentAssetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.parentFullResourceName">ParentFullResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResults">DataGoogleCloudAssetSearchAllResourcesResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.assetType"></a>

```go
func AssetType() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Folders`<sup>Required</sup> <a name="Folders" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.folders"></a>

```go
func Folders() *[]*string
```

- *Type:* *[]*string

---

##### `KmsKeys`<sup>Required</sup> <a name="KmsKeys" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.kmsKeys"></a>

```go
func KmsKeys() *[]*string
```

- *Type:* *[]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkTags`<sup>Required</sup> <a name="NetworkTags" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.networkTags"></a>

```go
func NetworkTags() *[]*string
```

- *Type:* *[]*string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `ParentAssetType`<sup>Required</sup> <a name="ParentAssetType" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.parentAssetType"></a>

```go
func ParentAssetType() *string
```

- *Type:* *string

---

##### `ParentFullResourceName`<sup>Required</sup> <a name="ParentFullResourceName" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.parentFullResourceName"></a>

```go
func ParentFullResourceName() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudAssetSearchAllResourcesResults
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResults">DataGoogleCloudAssetSearchAllResourcesResults</a>

---



