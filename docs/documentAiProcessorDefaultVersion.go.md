# `documentAiProcessorDefaultVersion` Submodule <a name="`documentAiProcessorDefaultVersion` Submodule" id="@cdktf/provider-google.documentAiProcessorDefaultVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocumentAiProcessorDefaultVersion <a name="DocumentAiProcessorDefaultVersion" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/document_ai_processor_default_version google_document_ai_processor_default_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/documentaiprocessordefaultversion"

documentaiprocessordefaultversion.NewDocumentAiProcessorDefaultVersion(scope Construct, id *string, config DocumentAiProcessorDefaultVersionConfig) DocumentAiProcessorDefaultVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig">DocumentAiProcessorDefaultVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig">DocumentAiProcessorDefaultVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.putTimeouts"></a>

```go
func PutTimeouts(value DocumentAiProcessorDefaultVersionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts">DocumentAiProcessorDefaultVersionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/documentaiprocessordefaultversion"

documentaiprocessordefaultversion.DocumentAiProcessorDefaultVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/documentaiprocessordefaultversion"

documentaiprocessordefaultversion.DocumentAiProcessorDefaultVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/documentaiprocessordefaultversion"

documentaiprocessordefaultversion.DocumentAiProcessorDefaultVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference">DocumentAiProcessorDefaultVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.processorInput">ProcessorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.processor">Processor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.timeouts"></a>

```go
func Timeouts() DocumentAiProcessorDefaultVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference">DocumentAiProcessorDefaultVersionTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProcessorInput`<sup>Optional</sup> <a name="ProcessorInput" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.processorInput"></a>

```go
func ProcessorInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Processor`<sup>Required</sup> <a name="Processor" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.processor"></a>

```go
func Processor() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DocumentAiProcessorDefaultVersionConfig <a name="DocumentAiProcessorDefaultVersionConfig" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/documentaiprocessordefaultversion"

&documentaiprocessordefaultversion.DocumentAiProcessorDefaultVersionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Processor: *string,
	Version: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.processor">Processor</a></code> | <code>*string</code> | The processor to set the version on. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.version">Version</a></code> | <code>*string</code> | The version to set. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/document_ai_processor_default_version#id DocumentAiProcessorDefaultVersion#id}. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts">DocumentAiProcessorDefaultVersionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Processor`<sup>Required</sup> <a name="Processor" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.processor"></a>

```go
Processor *string
```

- *Type:* *string

The processor to set the version on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/document_ai_processor_default_version#processor DocumentAiProcessorDefaultVersion#processor}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

The version to set.

Using 'stable' or 'rc' will cause the API to return the latest version in that release channel.
Apply 'lifecycle.ignore_changes' to the 'version' field to suppress this diff.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/document_ai_processor_default_version#version DocumentAiProcessorDefaultVersion#version}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/document_ai_processor_default_version#id DocumentAiProcessorDefaultVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.timeouts"></a>

```go
Timeouts DocumentAiProcessorDefaultVersionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts">DocumentAiProcessorDefaultVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/document_ai_processor_default_version#timeouts DocumentAiProcessorDefaultVersion#timeouts}

---

### DocumentAiProcessorDefaultVersionTimeouts <a name="DocumentAiProcessorDefaultVersionTimeouts" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/documentaiprocessordefaultversion"

&documentaiprocessordefaultversion.DocumentAiProcessorDefaultVersionTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/document_ai_processor_default_version#create DocumentAiProcessorDefaultVersion#create}. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/document_ai_processor_default_version#delete DocumentAiProcessorDefaultVersion#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/document_ai_processor_default_version#create DocumentAiProcessorDefaultVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/document_ai_processor_default_version#delete DocumentAiProcessorDefaultVersion#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocumentAiProcessorDefaultVersionTimeoutsOutputReference <a name="DocumentAiProcessorDefaultVersionTimeoutsOutputReference" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/documentaiprocessordefaultversion"

documentaiprocessordefaultversion.NewDocumentAiProcessorDefaultVersionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiProcessorDefaultVersionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



