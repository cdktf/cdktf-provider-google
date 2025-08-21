# `dataGoogleKmsKeyHandles` Submodule <a name="`dataGoogleKmsKeyHandles` Submodule" id="@cdktf/provider-google.dataGoogleKmsKeyHandles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsKeyHandles <a name="DataGoogleKmsKeyHandles" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/kms_key_handles google_kms_key_handles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglekmskeyhandles"

datagooglekmskeyhandles.NewDataGoogleKmsKeyHandles(scope Construct, id *string, config DataGoogleKmsKeyHandlesConfig) DataGoogleKmsKeyHandles
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig">DataGoogleKmsKeyHandlesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig">DataGoogleKmsKeyHandlesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleKmsKeyHandles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglekmskeyhandles"

datagooglekmskeyhandles.DataGoogleKmsKeyHandles_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglekmskeyhandles"

datagooglekmskeyhandles.DataGoogleKmsKeyHandles_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglekmskeyhandles"

datagooglekmskeyhandles.DataGoogleKmsKeyHandles_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglekmskeyhandles"

datagooglekmskeyhandles.DataGoogleKmsKeyHandles_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleKmsKeyHandles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleKmsKeyHandles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleKmsKeyHandles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/kms_key_handles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleKmsKeyHandles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.keyHandles">KeyHandles</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList">DataGoogleKmsKeyHandlesKeyHandlesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.resourceTypeSelectorInput">ResourceTypeSelectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.resourceTypeSelector">ResourceTypeSelector</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `KeyHandles`<sup>Required</sup> <a name="KeyHandles" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.keyHandles"></a>

```go
func KeyHandles() DataGoogleKmsKeyHandlesKeyHandlesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList">DataGoogleKmsKeyHandlesKeyHandlesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSelectorInput`<sup>Optional</sup> <a name="ResourceTypeSelectorInput" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.resourceTypeSelectorInput"></a>

```go
func ResourceTypeSelectorInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ResourceTypeSelector`<sup>Required</sup> <a name="ResourceTypeSelector" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.resourceTypeSelector"></a>

```go
func ResourceTypeSelector() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandles.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsKeyHandlesConfig <a name="DataGoogleKmsKeyHandlesConfig" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglekmskeyhandles"

&datagooglekmskeyhandles.DataGoogleKmsKeyHandlesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	ResourceTypeSelector: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.location">Location</a></code> | <code>*string</code> | The canonical id for the location. For example: "us-east1". |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.resourceTypeSelector">ResourceTypeSelector</a></code> | <code>*string</code> | The resource_type_selector argument is used to add a filter query parameter that limits which key handles are retrieved by the data source: ?filter=resource_type_selector="{{resource_type_selector}}". Example values: * resource_type_selector="{SERVICE}.googleapis.com/{TYPE}". [See the documentation about using filters](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyHandles/list). |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/kms_key_handles#id DataGoogleKmsKeyHandles#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.project">Project</a></code> | <code>*string</code> | Project ID of the project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The canonical id for the location. For example: "us-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/kms_key_handles#location DataGoogleKmsKeyHandles#location}

---

##### `ResourceTypeSelector`<sup>Required</sup> <a name="ResourceTypeSelector" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.resourceTypeSelector"></a>

```go
ResourceTypeSelector *string
```

- *Type:* *string

The resource_type_selector argument is used to add a filter query parameter that limits which key handles are retrieved by the data source: ?filter=resource_type_selector="{{resource_type_selector}}". Example values: * resource_type_selector="{SERVICE}.googleapis.com/{TYPE}". [See the documentation about using filters](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyHandles/list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/kms_key_handles#resource_type_selector DataGoogleKmsKeyHandles#resource_type_selector}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/kms_key_handles#id DataGoogleKmsKeyHandles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Project ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/kms_key_handles#project DataGoogleKmsKeyHandles#project}

---

### DataGoogleKmsKeyHandlesKeyHandles <a name="DataGoogleKmsKeyHandlesKeyHandles" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglekmskeyhandles"

&datagooglekmskeyhandles.DataGoogleKmsKeyHandlesKeyHandles {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleKmsKeyHandlesKeyHandlesList <a name="DataGoogleKmsKeyHandlesKeyHandlesList" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglekmskeyhandles"

datagooglekmskeyhandles.NewDataGoogleKmsKeyHandlesKeyHandlesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleKmsKeyHandlesKeyHandlesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.get"></a>

```go
func Get(index *f64) DataGoogleKmsKeyHandlesKeyHandlesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleKmsKeyHandlesKeyHandlesOutputReference <a name="DataGoogleKmsKeyHandlesKeyHandlesOutputReference" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglekmskeyhandles"

datagooglekmskeyhandles.NewDataGoogleKmsKeyHandlesKeyHandlesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleKmsKeyHandlesKeyHandlesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.resourceTypeSelector">ResourceTypeSelector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandles">DataGoogleKmsKeyHandlesKeyHandles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceTypeSelector`<sup>Required</sup> <a name="ResourceTypeSelector" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.resourceTypeSelector"></a>

```go
func ResourceTypeSelector() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandlesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleKmsKeyHandlesKeyHandles
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsKeyHandles.DataGoogleKmsKeyHandlesKeyHandles">DataGoogleKmsKeyHandlesKeyHandles</a>

---



