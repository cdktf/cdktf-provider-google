# `dataGooglePubsubTopic` Submodule <a name="`dataGooglePubsubTopic` Submodule" id="@cdktf/provider-google.dataGooglePubsubTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGooglePubsubTopic <a name="DataGooglePubsubTopic" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/pubsub_topic google_pubsub_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglepubsubtopic"

datagooglepubsubtopic.NewDataGooglePubsubTopic(scope Construct, id *string, config DataGooglePubsubTopicConfig) DataGooglePubsubTopic
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig">DataGooglePubsubTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig">DataGooglePubsubTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglepubsubtopic"

datagooglepubsubtopic.DataGooglePubsubTopic_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglepubsubtopic"

datagooglepubsubtopic.DataGooglePubsubTopic_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglepubsubtopic"

datagooglepubsubtopic.DataGooglePubsubTopic_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.messageRetentionDuration">MessageRetentionDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.messageStoragePolicy">MessageStoragePolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList">DataGooglePubsubTopicMessageStoragePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.schemaSettings">SchemaSettings</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList">DataGooglePubsubTopicSchemaSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `MessageRetentionDuration`<sup>Required</sup> <a name="MessageRetentionDuration" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.messageRetentionDuration"></a>

```go
func MessageRetentionDuration() *string
```

- *Type:* *string

---

##### `MessageStoragePolicy`<sup>Required</sup> <a name="MessageStoragePolicy" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.messageStoragePolicy"></a>

```go
func MessageStoragePolicy() DataGooglePubsubTopicMessageStoragePolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList">DataGooglePubsubTopicMessageStoragePolicyList</a>

---

##### `SchemaSettings`<sup>Required</sup> <a name="SchemaSettings" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.schemaSettings"></a>

```go
func SchemaSettings() DataGooglePubsubTopicSchemaSettingsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList">DataGooglePubsubTopicSchemaSettingsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopic.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGooglePubsubTopicConfig <a name="DataGooglePubsubTopicConfig" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglepubsubtopic"

&datagooglepubsubtopic.DataGooglePubsubTopicConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.name">Name</a></code> | <code>*string</code> | Name of the topic. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/pubsub_topic#id DataGooglePubsubTopic#id}. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/pubsub_topic#project DataGooglePubsubTopic#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the topic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/pubsub_topic#name DataGooglePubsubTopic#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/pubsub_topic#id DataGooglePubsubTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/pubsub_topic#project DataGooglePubsubTopic#project}.

---

### DataGooglePubsubTopicMessageStoragePolicy <a name="DataGooglePubsubTopicMessageStoragePolicy" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglepubsubtopic"

&datagooglepubsubtopic.DataGooglePubsubTopicMessageStoragePolicy {

}
```


### DataGooglePubsubTopicSchemaSettings <a name="DataGooglePubsubTopicSchemaSettings" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglepubsubtopic"

&datagooglepubsubtopic.DataGooglePubsubTopicSchemaSettings {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGooglePubsubTopicMessageStoragePolicyList <a name="DataGooglePubsubTopicMessageStoragePolicyList" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglepubsubtopic"

datagooglepubsubtopic.NewDataGooglePubsubTopicMessageStoragePolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePubsubTopicMessageStoragePolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.get"></a>

```go
func Get(index *f64) DataGooglePubsubTopicMessageStoragePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePubsubTopicMessageStoragePolicyOutputReference <a name="DataGooglePubsubTopicMessageStoragePolicyOutputReference" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglepubsubtopic"

datagooglepubsubtopic.NewDataGooglePubsubTopicMessageStoragePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePubsubTopicMessageStoragePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegions">AllowedPersistenceRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicy">DataGooglePubsubTopicMessageStoragePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedPersistenceRegions`<sup>Required</sup> <a name="AllowedPersistenceRegions" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegions"></a>

```go
func AllowedPersistenceRegions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePubsubTopicMessageStoragePolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicy">DataGooglePubsubTopicMessageStoragePolicy</a>

---


### DataGooglePubsubTopicSchemaSettingsList <a name="DataGooglePubsubTopicSchemaSettingsList" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglepubsubtopic"

datagooglepubsubtopic.NewDataGooglePubsubTopicSchemaSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePubsubTopicSchemaSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.get"></a>

```go
func Get(index *f64) DataGooglePubsubTopicSchemaSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePubsubTopicSchemaSettingsOutputReference <a name="DataGooglePubsubTopicSchemaSettingsOutputReference" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglepubsubtopic"

datagooglepubsubtopic.NewDataGooglePubsubTopicSchemaSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePubsubTopicSchemaSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettings">DataGooglePubsubTopicSchemaSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePubsubTopicSchemaSettings
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettings">DataGooglePubsubTopicSchemaSettings</a>

---



