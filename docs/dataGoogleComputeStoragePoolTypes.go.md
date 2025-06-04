# `dataGoogleComputeStoragePoolTypes` Submodule <a name="`dataGoogleComputeStoragePoolTypes` Submodule" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeStoragePoolTypes <a name="DataGoogleComputeStoragePoolTypes" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/compute_storage_pool_types google_compute_storage_pool_types}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/datagooglecomputestoragepooltypes"

datagooglecomputestoragepooltypes.NewDataGoogleComputeStoragePoolTypes(scope Construct, id *string, config DataGoogleComputeStoragePoolTypesConfig) DataGoogleComputeStoragePoolTypes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig">DataGoogleComputeStoragePoolTypesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig">DataGoogleComputeStoragePoolTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeStoragePoolTypes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/datagooglecomputestoragepooltypes"

datagooglecomputestoragepooltypes.DataGoogleComputeStoragePoolTypes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/datagooglecomputestoragepooltypes"

datagooglecomputestoragepooltypes.DataGoogleComputeStoragePoolTypes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/datagooglecomputestoragepooltypes"

datagooglecomputestoragepooltypes.DataGoogleComputeStoragePoolTypes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/datagooglecomputestoragepooltypes"

datagooglecomputestoragepooltypes.DataGoogleComputeStoragePoolTypes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleComputeStoragePoolTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleComputeStoragePoolTypes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleComputeStoragePoolTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/compute_storage_pool_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeStoragePoolTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.deprecated">Deprecated</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList">DataGoogleComputeStoragePoolTypesDeprecatedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedCapacityGb">MaxPoolProvisionedCapacityGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedIops">MaxPoolProvisionedIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedThroughput">MaxPoolProvisionedThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedCapacityGb">MinPoolProvisionedCapacityGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedIops">MinPoolProvisionedIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedThroughput">MinPoolProvisionedThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.selfLinkWithId">SelfLinkWithId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.supportedDiskTypes">SupportedDiskTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.storagePoolTypeInput">StoragePoolTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.storagePoolType">StoragePoolType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `Deprecated`<sup>Required</sup> <a name="Deprecated" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.deprecated"></a>

```go
func Deprecated() DataGoogleComputeStoragePoolTypesDeprecatedList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList">DataGoogleComputeStoragePoolTypesDeprecatedList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `MaxPoolProvisionedCapacityGb`<sup>Required</sup> <a name="MaxPoolProvisionedCapacityGb" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedCapacityGb"></a>

```go
func MaxPoolProvisionedCapacityGb() *f64
```

- *Type:* *f64

---

##### `MaxPoolProvisionedIops`<sup>Required</sup> <a name="MaxPoolProvisionedIops" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedIops"></a>

```go
func MaxPoolProvisionedIops() *f64
```

- *Type:* *f64

---

##### `MaxPoolProvisionedThroughput`<sup>Required</sup> <a name="MaxPoolProvisionedThroughput" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedThroughput"></a>

```go
func MaxPoolProvisionedThroughput() *f64
```

- *Type:* *f64

---

##### `MinPoolProvisionedCapacityGb`<sup>Required</sup> <a name="MinPoolProvisionedCapacityGb" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedCapacityGb"></a>

```go
func MinPoolProvisionedCapacityGb() *f64
```

- *Type:* *f64

---

##### `MinPoolProvisionedIops`<sup>Required</sup> <a name="MinPoolProvisionedIops" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedIops"></a>

```go
func MinPoolProvisionedIops() *f64
```

- *Type:* *f64

---

##### `MinPoolProvisionedThroughput`<sup>Required</sup> <a name="MinPoolProvisionedThroughput" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedThroughput"></a>

```go
func MinPoolProvisionedThroughput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `SelfLinkWithId`<sup>Required</sup> <a name="SelfLinkWithId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.selfLinkWithId"></a>

```go
func SelfLinkWithId() *string
```

- *Type:* *string

---

##### `SupportedDiskTypes`<sup>Required</sup> <a name="SupportedDiskTypes" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.supportedDiskTypes"></a>

```go
func SupportedDiskTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `StoragePoolTypeInput`<sup>Optional</sup> <a name="StoragePoolTypeInput" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.storagePoolTypeInput"></a>

```go
func StoragePoolTypeInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `StoragePoolType`<sup>Required</sup> <a name="StoragePoolType" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.storagePoolType"></a>

```go
func StoragePoolType() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeStoragePoolTypesConfig <a name="DataGoogleComputeStoragePoolTypesConfig" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/datagooglecomputestoragepooltypes"

&datagooglecomputestoragepooltypes.DataGoogleComputeStoragePoolTypesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	StoragePoolType: *string,
	Zone: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.storagePoolType">StoragePoolType</a></code> | <code>*string</code> | Name of the storage pool type. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.zone">Zone</a></code> | <code>*string</code> | The name of the zone. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/compute_storage_pool_types#project DataGoogleComputeStoragePoolTypes#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StoragePoolType`<sup>Required</sup> <a name="StoragePoolType" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.storagePoolType"></a>

```go
StoragePoolType *string
```

- *Type:* *string

Name of the storage pool type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/compute_storage_pool_types#storage_pool_type DataGoogleComputeStoragePoolTypes#storage_pool_type}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The name of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/compute_storage_pool_types#zone DataGoogleComputeStoragePoolTypes#zone}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/compute_storage_pool_types#project DataGoogleComputeStoragePoolTypes#project}.

---

### DataGoogleComputeStoragePoolTypesDeprecated <a name="DataGoogleComputeStoragePoolTypesDeprecated" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecated.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/datagooglecomputestoragepooltypes"

&datagooglecomputestoragepooltypes.DataGoogleComputeStoragePoolTypesDeprecated {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeStoragePoolTypesDeprecatedList <a name="DataGoogleComputeStoragePoolTypesDeprecatedList" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/datagooglecomputestoragepooltypes"

datagooglecomputestoragepooltypes.NewDataGoogleComputeStoragePoolTypesDeprecatedList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeStoragePoolTypesDeprecatedList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.get"></a>

```go
func Get(index *f64) DataGoogleComputeStoragePoolTypesDeprecatedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeStoragePoolTypesDeprecatedOutputReference <a name="DataGoogleComputeStoragePoolTypesDeprecatedOutputReference" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/datagooglecomputestoragepooltypes"

datagooglecomputestoragepooltypes.NewDataGoogleComputeStoragePoolTypesDeprecatedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeStoragePoolTypesDeprecatedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.deleted">Deleted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.deprecated">Deprecated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.obsolete">Obsolete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.replacement">Replacement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecated">DataGoogleComputeStoragePoolTypesDeprecated</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Deleted`<sup>Required</sup> <a name="Deleted" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.deleted"></a>

```go
func Deleted() *string
```

- *Type:* *string

---

##### `Deprecated`<sup>Required</sup> <a name="Deprecated" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.deprecated"></a>

```go
func Deprecated() *string
```

- *Type:* *string

---

##### `Obsolete`<sup>Required</sup> <a name="Obsolete" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.obsolete"></a>

```go
func Obsolete() *string
```

- *Type:* *string

---

##### `Replacement`<sup>Required</sup> <a name="Replacement" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.replacement"></a>

```go
func Replacement() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeStoragePoolTypesDeprecated
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecated">DataGoogleComputeStoragePoolTypesDeprecated</a>

---



