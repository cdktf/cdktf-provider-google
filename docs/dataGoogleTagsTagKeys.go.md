# `dataGoogleTagsTagKeys` Submodule <a name="`dataGoogleTagsTagKeys` Submodule" id="@cdktf/provider-google.dataGoogleTagsTagKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleTagsTagKeys <a name="DataGoogleTagsTagKeys" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/tags_tag_keys google_tags_tag_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogletagstagkeys"

datagoogletagstagkeys.NewDataGoogleTagsTagKeys(scope Construct, id *string, config DataGoogleTagsTagKeysConfig) DataGoogleTagsTagKeys
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig">DataGoogleTagsTagKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig">DataGoogleTagsTagKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleTagsTagKeys resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogletagstagkeys"

datagoogletagstagkeys.DataGoogleTagsTagKeys_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogletagstagkeys"

datagoogletagstagkeys.DataGoogleTagsTagKeys_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogletagstagkeys"

datagoogletagstagkeys.DataGoogleTagsTagKeys_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogletagstagkeys"

datagoogletagstagkeys.DataGoogleTagsTagKeys_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleTagsTagKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleTagsTagKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleTagsTagKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/tags_tag_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleTagsTagKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.keys">Keys</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList">DataGoogleTagsTagKeysKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.keys"></a>

```go
func Keys() DataGoogleTagsTagKeysKeysList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList">DataGoogleTagsTagKeysKeysList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeys.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleTagsTagKeysConfig <a name="DataGoogleTagsTagKeysConfig" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogletagstagkeys"

&datagoogletagstagkeys.DataGoogleTagsTagKeysConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Parent: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/tags_tag_keys#parent DataGoogleTagsTagKeys#parent}. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/tags_tag_keys#id DataGoogleTagsTagKeys#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/tags_tag_keys#parent DataGoogleTagsTagKeys#parent}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/tags_tag_keys#id DataGoogleTagsTagKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleTagsTagKeysKeys <a name="DataGoogleTagsTagKeysKeys" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogletagstagkeys"

&datagoogletagstagkeys.DataGoogleTagsTagKeysKeys {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleTagsTagKeysKeysList <a name="DataGoogleTagsTagKeysKeysList" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogletagstagkeys"

datagoogletagstagkeys.NewDataGoogleTagsTagKeysKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleTagsTagKeysKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.get"></a>

```go
func Get(index *f64) DataGoogleTagsTagKeysKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleTagsTagKeysKeysOutputReference <a name="DataGoogleTagsTagKeysKeysOutputReference" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogletagstagkeys"

datagoogletagstagkeys.NewDataGoogleTagsTagKeysKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleTagsTagKeysKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.namespacedName">NamespacedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.purpose">Purpose</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.purposeData">PurposeData</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.shortName">ShortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeys">DataGoogleTagsTagKeysKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamespacedName`<sup>Required</sup> <a name="NamespacedName" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.namespacedName"></a>

```go
func NamespacedName() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.purpose"></a>

```go
func Purpose() *string
```

- *Type:* *string

---

##### `PurposeData`<sup>Required</sup> <a name="PurposeData" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.purposeData"></a>

```go
func PurposeData() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.shortName"></a>

```go
func ShortName() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleTagsTagKeysKeys
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleTagsTagKeys.DataGoogleTagsTagKeysKeys">DataGoogleTagsTagKeysKeys</a>

---



