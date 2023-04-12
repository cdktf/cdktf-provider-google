# `composerEnvironment` Submodule <a name="`composerEnvironment` Submodule" id="@cdktf/provider-google.composerEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComposerEnvironment <a name="ComposerEnvironment" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/composer_environment google_composer_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironment(scope Construct, id *string, config ComposerEnvironmentConfig) ComposerEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig">ComposerEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig">ComposerEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig"></a>

```go
func PutConfig(value ComposerEnvironmentConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putTimeouts"></a>

```go
func PutTimeouts(value ComposerEnvironmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts">ComposerEnvironmentTimeouts</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.ComposerEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.ComposerEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.ComposerEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference">ComposerEnvironmentConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference">ComposerEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.config"></a>

```go
func Config() ComposerEnvironmentConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference">ComposerEnvironmentConfigAOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.timeouts"></a>

```go
func Timeouts() ComposerEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference">ComposerEnvironmentTimeoutsOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.configInput"></a>

```go
func ConfigInput() ComposerEnvironmentConfigA
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComposerEnvironmentConfig <a name="ComposerEnvironmentConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Config: github.com/cdktf/cdktf-provider-google-go/google.composerEnvironment.ComposerEnvironmentConfigA,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.composerEnvironment.ComposerEnvironmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.name">Name</a></code> | <code>*string</code> | Name of the environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#id ComposerEnvironment#id}. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User-defined labels for this environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.region">Region</a></code> | <code>*string</code> | The location or Compute Engine region for the environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts">ComposerEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the environment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#name ComposerEnvironment#name}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.config"></a>

```go
Config ComposerEnvironmentConfigA
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a>

config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#config ComposerEnvironment#config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#id ComposerEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User-defined labels for this environment.

The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?. Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?)?. No more than 64 labels can be associated with a given environment. Both keys and values must be <= 128 bytes in size.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#labels ComposerEnvironment#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#project ComposerEnvironment#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#region ComposerEnvironment#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.timeouts"></a>

```go
Timeouts ComposerEnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts">ComposerEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#timeouts ComposerEnvironment#timeouts}

---

### ComposerEnvironmentConfigA <a name="ComposerEnvironmentConfigA" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentConfigA {
	DatabaseConfig: github.com/cdktf/cdktf-provider-google-go/google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig,
	EncryptionConfig: github.com/cdktf/cdktf-provider-google-go/google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig,
	EnvironmentSize: *string,
	MaintenanceWindow: github.com/cdktf/cdktf-provider-google-go/google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow,
	MasterAuthorizedNetworksConfig: github.com/cdktf/cdktf-provider-google-go/google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig,
	NodeConfig: github.com/cdktf/cdktf-provider-google-go/google.composerEnvironment.ComposerEnvironmentConfigNodeConfig,
	NodeCount: *f64,
	PrivateEnvironmentConfig: github.com/cdktf/cdktf-provider-google-go/google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig,
	RecoveryConfig: github.com/cdktf/cdktf-provider-google-go/google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig,
	SoftwareConfig: github.com/cdktf/cdktf-provider-google-go/google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig,
	WebServerConfig: github.com/cdktf/cdktf-provider-google-go/google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig,
	WebServerNetworkAccessControl: github.com/cdktf/cdktf-provider-google-go/google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl,
	WorkloadsConfig: github.com/cdktf/cdktf-provider-google-go/google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.databaseConfig">DatabaseConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a></code> | database_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.environmentSize">EnvironmentSize</a></code> | <code>*string</code> | The size of the Cloud Composer environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.masterAuthorizedNetworksConfig">MasterAuthorizedNetworksConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a></code> | master_authorized_networks_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.privateEnvironmentConfig">PrivateEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a></code> | private_environment_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.recoveryConfig">RecoveryConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a></code> | recovery_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.softwareConfig">SoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.webServerConfig">WebServerConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a></code> | web_server_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.webServerNetworkAccessControl">WebServerNetworkAccessControl</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a></code> | web_server_network_access_control block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.workloadsConfig">WorkloadsConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a></code> | workloads_config block. |

---

##### `DatabaseConfig`<sup>Optional</sup> <a name="DatabaseConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.databaseConfig"></a>

```go
DatabaseConfig ComposerEnvironmentConfigDatabaseConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a>

database_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#database_config ComposerEnvironment#database_config}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.encryptionConfig"></a>

```go
EncryptionConfig ComposerEnvironmentConfigEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#encryption_config ComposerEnvironment#encryption_config}

---

##### `EnvironmentSize`<sup>Optional</sup> <a name="EnvironmentSize" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.environmentSize"></a>

```go
EnvironmentSize *string
```

- *Type:* *string

The size of the Cloud Composer environment.

This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#environment_size ComposerEnvironment#environment_size}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.maintenanceWindow"></a>

```go
MaintenanceWindow ComposerEnvironmentConfigMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#maintenance_window ComposerEnvironment#maintenance_window}

---

##### `MasterAuthorizedNetworksConfig`<sup>Optional</sup> <a name="MasterAuthorizedNetworksConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.masterAuthorizedNetworksConfig"></a>

```go
MasterAuthorizedNetworksConfig ComposerEnvironmentConfigMasterAuthorizedNetworksConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

master_authorized_networks_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#master_authorized_networks_config ComposerEnvironment#master_authorized_networks_config}

---

##### `NodeConfig`<sup>Optional</sup> <a name="NodeConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.nodeConfig"></a>

```go
NodeConfig ComposerEnvironmentConfigNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#node_config ComposerEnvironment#node_config}

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

The number of nodes in the Kubernetes Engine cluster that will be used to run this environment.

This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#node_count ComposerEnvironment#node_count}

---

##### `PrivateEnvironmentConfig`<sup>Optional</sup> <a name="PrivateEnvironmentConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.privateEnvironmentConfig"></a>

```go
PrivateEnvironmentConfig ComposerEnvironmentConfigPrivateEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a>

private_environment_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#private_environment_config ComposerEnvironment#private_environment_config}

---

##### `RecoveryConfig`<sup>Optional</sup> <a name="RecoveryConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.recoveryConfig"></a>

```go
RecoveryConfig ComposerEnvironmentConfigRecoveryConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a>

recovery_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#recovery_config ComposerEnvironment#recovery_config}

---

##### `SoftwareConfig`<sup>Optional</sup> <a name="SoftwareConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.softwareConfig"></a>

```go
SoftwareConfig ComposerEnvironmentConfigSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#software_config ComposerEnvironment#software_config}

---

##### `WebServerConfig`<sup>Optional</sup> <a name="WebServerConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.webServerConfig"></a>

```go
WebServerConfig ComposerEnvironmentConfigWebServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a>

web_server_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#web_server_config ComposerEnvironment#web_server_config}

---

##### `WebServerNetworkAccessControl`<sup>Optional</sup> <a name="WebServerNetworkAccessControl" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.webServerNetworkAccessControl"></a>

```go
WebServerNetworkAccessControl ComposerEnvironmentConfigWebServerNetworkAccessControl
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a>

web_server_network_access_control block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#web_server_network_access_control ComposerEnvironment#web_server_network_access_control}

---

##### `WorkloadsConfig`<sup>Optional</sup> <a name="WorkloadsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.workloadsConfig"></a>

```go
WorkloadsConfig ComposerEnvironmentConfigWorkloadsConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a>

workloads_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#workloads_config ComposerEnvironment#workloads_config}

---

### ComposerEnvironmentConfigDatabaseConfig <a name="ComposerEnvironmentConfigDatabaseConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentConfigDatabaseConfig {
	MachineType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig.property.machineType">MachineType</a></code> | <code>*string</code> | Optional. |

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

Optional.

Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. If not specified, db-n1-standard-2 will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#machine_type ComposerEnvironment#machine_type}

---

### ComposerEnvironmentConfigEncryptionConfig <a name="ComposerEnvironmentConfigEncryptionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentConfigEncryptionConfig {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#kms_key_name ComposerEnvironment#kms_key_name}

---

### ComposerEnvironmentConfigMaintenanceWindow <a name="ComposerEnvironmentConfigMaintenanceWindow" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentConfigMaintenanceWindow {
	EndTime: *string,
	Recurrence: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.property.endTime">EndTime</a></code> | <code>*string</code> | Maintenance window end time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.property.recurrence">Recurrence</a></code> | <code>*string</code> | Maintenance window recurrence. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.property.startTime">StartTime</a></code> | <code>*string</code> | Start time of the first recurrence of the maintenance window. |

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

Maintenance window end time.

It is used only to calculate the duration of the maintenance window. The value for end-time must be in the future, relative to 'start_time'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#end_time ComposerEnvironment#end_time}

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.property.recurrence"></a>

```go
Recurrence *string
```

- *Type:* *string

Maintenance window recurrence.

Format is a subset of RFC-5545 (https://tools.ietf.org/html/rfc5545) 'RRULE'. The only allowed values for 'FREQ' field are 'FREQ=DAILY' and 'FREQ=WEEKLY;BYDAY=...'. Example values: 'FREQ=WEEKLY;BYDAY=TU,WE', 'FREQ=DAILY'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#recurrence ComposerEnvironment#recurrence}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Start time of the first recurrence of the maintenance window.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#start_time ComposerEnvironment#start_time}

---

### ComposerEnvironmentConfigMasterAuthorizedNetworksConfig <a name="ComposerEnvironmentConfigMasterAuthorizedNetworksConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig {
	Enabled: interface{},
	CidrBlocks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether or not master authorized networks is enabled. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.cidrBlocks">CidrBlocks</a></code> | <code>interface{}</code> | cidr_blocks block. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether or not master authorized networks is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#enabled ComposerEnvironment#enabled}

---

##### `CidrBlocks`<sup>Optional</sup> <a name="CidrBlocks" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.cidrBlocks"></a>

```go
CidrBlocks interface{}
```

- *Type:* interface{}

cidr_blocks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cidr_blocks ComposerEnvironment#cidr_blocks}

---

### ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks <a name="ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks {
	CidrBlock: *string,
	DisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | cidr_block must be specified in CIDR notation. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.displayName">DisplayName</a></code> | <code>*string</code> | display_name is a field for users to identify CIDR blocks. |

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.cidrBlock"></a>

```go
CidrBlock *string
```

- *Type:* *string

cidr_block must be specified in CIDR notation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cidr_block ComposerEnvironment#cidr_block}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

display_name is a field for users to identify CIDR blocks.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#display_name ComposerEnvironment#display_name}

---

### ComposerEnvironmentConfigNodeConfig <a name="ComposerEnvironmentConfigNodeConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentConfigNodeConfig {
	DiskSizeGb: *f64,
	EnableIpMasqAgent: interface{},
	IpAllocationPolicy: interface{},
	MachineType: *string,
	Network: *string,
	OauthScopes: *[]*string,
	ServiceAccount: *string,
	Subnetwork: *string,
	Tags: *[]*string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | The disk size in GB used for node VMs. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.enableIpMasqAgent">EnableIpMasqAgent</a></code> | <code>interface{}</code> | Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.ipAllocationPolicy">IpAllocationPolicy</a></code> | <code>interface{}</code> | Configuration for controlling how IPs are allocated in the GKE cluster. Cannot be updated. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.machineType">MachineType</a></code> | <code>*string</code> | The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.network">Network</a></code> | <code>*string</code> | The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | The set of Google API scopes to be made available on all node VMs. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The Google Cloud Platform Service Account to be used by the node VMs. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The Compute Engine subnetwork to be used for machine communications, , specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment's project and region. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | The list of instance tags applied to all node VMs. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.zone">Zone</a></code> | <code>*string</code> | The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment's project and region. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. |

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.diskSizeGb"></a>

```go
DiskSizeGb *f64
```

- *Type:* *f64

The disk size in GB used for node VMs.

Minimum size is 20GB. If unspecified, defaults to 100GB. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#disk_size_gb ComposerEnvironment#disk_size_gb}

---

##### `EnableIpMasqAgent`<sup>Optional</sup> <a name="EnableIpMasqAgent" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.enableIpMasqAgent"></a>

```go
EnableIpMasqAgent interface{}
```

- *Type:* interface{}

Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic.

See: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#enable_ip_masq_agent ComposerEnvironment#enable_ip_masq_agent}

---

##### `IpAllocationPolicy`<sup>Optional</sup> <a name="IpAllocationPolicy" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.ipAllocationPolicy"></a>

```go
IpAllocationPolicy interface{}
```

- *Type:* interface{}

Configuration for controlling how IPs are allocated in the GKE cluster. Cannot be updated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#ip_allocation_policy ComposerEnvironment#ip_allocation_policy}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The Compute Engine machine type used for cluster instances, specified as a name or relative resource name.

For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#machine_type ComposerEnvironment#machine_type}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The Compute Engine machine type used for cluster instances, specified as a name or relative resource name.

For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. The network must belong to the environment's project. If unspecified, the "default" network ID in the environment's project is used. If a Custom Subnet Network is provided, subnetwork must also be provided.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#network ComposerEnvironment#network}

---

##### `OauthScopes`<sup>Optional</sup> <a name="OauthScopes" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.oauthScopes"></a>

```go
OauthScopes *[]*string
```

- *Type:* *[]*string

The set of Google API scopes to be made available on all node VMs.

Cannot be updated. If empty, defaults to ["https://www.googleapis.com/auth/cloud-platform"]. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#oauth_scopes ComposerEnvironment#oauth_scopes}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The Google Cloud Platform Service Account to be used by the node VMs.

If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated. If given, note that the service account must have roles/composer.worker for any GCP resources created under the Cloud Composer Environment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#service_account ComposerEnvironment#service_account}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The Compute Engine subnetwork to be used for machine communications, , specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment's project and region.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#subnetwork ComposerEnvironment#subnetwork}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

The list of instance tags applied to all node VMs.

Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with RFC1035. Cannot be updated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#tags ComposerEnvironment#tags}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment's project and region. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#zone ComposerEnvironment#zone}

---

### ComposerEnvironmentConfigNodeConfigIpAllocationPolicy <a name="ComposerEnvironmentConfigNodeConfigIpAllocationPolicy" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy {
	ClusterIpv4CidrBlock: *string,
	ClusterSecondaryRangeName: *string,
	ServicesIpv4CidrBlock: *string,
	ServicesSecondaryRangeName: *string,
	UseIpAliases: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterIpv4CidrBlock">ClusterIpv4CidrBlock</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cluster_ipv4_cidr_block ComposerEnvironment#cluster_ipv4_cidr_block}. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterSecondaryRangeName">ClusterSecondaryRangeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cluster_secondary_range_name ComposerEnvironment#cluster_secondary_range_name}. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesIpv4CidrBlock">ServicesIpv4CidrBlock</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#services_ipv4_cidr_block ComposerEnvironment#services_ipv4_cidr_block}. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesSecondaryRangeName">ServicesSecondaryRangeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#services_secondary_range_name ComposerEnvironment#services_secondary_range_name}. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.useIpAliases">UseIpAliases</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#use_ip_aliases ComposerEnvironment#use_ip_aliases}. |

---

##### `ClusterIpv4CidrBlock`<sup>Optional</sup> <a name="ClusterIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterIpv4CidrBlock"></a>

```go
ClusterIpv4CidrBlock *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cluster_ipv4_cidr_block ComposerEnvironment#cluster_ipv4_cidr_block}.

---

##### `ClusterSecondaryRangeName`<sup>Optional</sup> <a name="ClusterSecondaryRangeName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterSecondaryRangeName"></a>

```go
ClusterSecondaryRangeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cluster_secondary_range_name ComposerEnvironment#cluster_secondary_range_name}.

---

##### `ServicesIpv4CidrBlock`<sup>Optional</sup> <a name="ServicesIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesIpv4CidrBlock"></a>

```go
ServicesIpv4CidrBlock *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#services_ipv4_cidr_block ComposerEnvironment#services_ipv4_cidr_block}.

---

##### `ServicesSecondaryRangeName`<sup>Optional</sup> <a name="ServicesSecondaryRangeName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesSecondaryRangeName"></a>

```go
ServicesSecondaryRangeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#services_secondary_range_name ComposerEnvironment#services_secondary_range_name}.

---

##### `UseIpAliases`<sup>Optional</sup> <a name="UseIpAliases" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.useIpAliases"></a>

```go
UseIpAliases interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#use_ip_aliases ComposerEnvironment#use_ip_aliases}.

---

### ComposerEnvironmentConfigPrivateEnvironmentConfig <a name="ComposerEnvironmentConfigPrivateEnvironmentConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig {
	CloudComposerConnectionSubnetwork: *string,
	CloudComposerNetworkIpv4CidrBlock: *string,
	CloudSqlIpv4CidrBlock: *string,
	EnablePrivateEndpoint: interface{},
	EnablePrivatelyUsedPublicIps: interface{},
	MasterIpv4CidrBlock: *string,
	WebServerIpv4CidrBlock: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerConnectionSubnetwork">CloudComposerConnectionSubnetwork</a></code> | <code>*string</code> | When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerNetworkIpv4CidrBlock">CloudComposerNetworkIpv4CidrBlock</a></code> | <code>*string</code> | The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudSqlIpv4CidrBlock">CloudSqlIpv4CidrBlock</a></code> | <code>*string</code> | The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivateEndpoint">EnablePrivateEndpoint</a></code> | <code>interface{}</code> | If true, access to the public endpoint of the GKE cluster is denied. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivatelyUsedPublicIps">EnablePrivatelyUsedPublicIps</a></code> | <code>interface{}</code> | When enabled, IPs from public (non-RFC1918) ranges can be used for ip_allocation_policy.cluster_ipv4_cidr_block and ip_allocation_policy.service_ipv4_cidr_block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.masterIpv4CidrBlock">MasterIpv4CidrBlock</a></code> | <code>*string</code> | The IP range in CIDR notation to use for the hosted master network. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.webServerIpv4CidrBlock">WebServerIpv4CidrBlock</a></code> | <code>*string</code> | The CIDR block from which IP range for web server will be reserved. |

---

##### `CloudComposerConnectionSubnetwork`<sup>Optional</sup> <a name="CloudComposerConnectionSubnetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerConnectionSubnetwork"></a>

```go
CloudComposerConnectionSubnetwork *string
```

- *Type:* *string

When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork.

This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cloud_composer_connection_subnetwork ComposerEnvironment#cloud_composer_connection_subnetwork}

---

##### `CloudComposerNetworkIpv4CidrBlock`<sup>Optional</sup> <a name="CloudComposerNetworkIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerNetworkIpv4CidrBlock"></a>

```go
CloudComposerNetworkIpv4CidrBlock *string
```

- *Type:* *string

The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved.

Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cloud_composer_network_ipv4_cidr_block ComposerEnvironment#cloud_composer_network_ipv4_cidr_block}

---

##### `CloudSqlIpv4CidrBlock`<sup>Optional</sup> <a name="CloudSqlIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudSqlIpv4CidrBlock"></a>

```go
CloudSqlIpv4CidrBlock *string
```

- *Type:* *string

The CIDR block from which IP range in tenant project will be reserved for Cloud SQL.

Needs to be disjoint from web_server_ipv4_cidr_block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cloud_sql_ipv4_cidr_block ComposerEnvironment#cloud_sql_ipv4_cidr_block}

---

##### `EnablePrivateEndpoint`<sup>Optional</sup> <a name="EnablePrivateEndpoint" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivateEndpoint"></a>

```go
EnablePrivateEndpoint interface{}
```

- *Type:* interface{}

If true, access to the public endpoint of the GKE cluster is denied.

If this field is set to true, ip_allocation_policy.use_ip_aliases must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#enable_private_endpoint ComposerEnvironment#enable_private_endpoint}

---

##### `EnablePrivatelyUsedPublicIps`<sup>Optional</sup> <a name="EnablePrivatelyUsedPublicIps" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivatelyUsedPublicIps"></a>

```go
EnablePrivatelyUsedPublicIps interface{}
```

- *Type:* interface{}

When enabled, IPs from public (non-RFC1918) ranges can be used for ip_allocation_policy.cluster_ipv4_cidr_block and ip_allocation_policy.service_ipv4_cidr_block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#enable_privately_used_public_ips ComposerEnvironment#enable_privately_used_public_ips}

---

##### `MasterIpv4CidrBlock`<sup>Optional</sup> <a name="MasterIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.masterIpv4CidrBlock"></a>

```go
MasterIpv4CidrBlock *string
```

- *Type:* *string

The IP range in CIDR notation to use for the hosted master network.

This range is used for assigning internal IP addresses to the cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network. If left blank, the default value of '172.16.0.0/28' is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#master_ipv4_cidr_block ComposerEnvironment#master_ipv4_cidr_block}

---

##### `WebServerIpv4CidrBlock`<sup>Optional</sup> <a name="WebServerIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.webServerIpv4CidrBlock"></a>

```go
WebServerIpv4CidrBlock *string
```

- *Type:* *string

The CIDR block from which IP range for web server will be reserved.

Needs to be disjoint from master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#web_server_ipv4_cidr_block ComposerEnvironment#web_server_ipv4_cidr_block}

---

### ComposerEnvironmentConfigRecoveryConfig <a name="ComposerEnvironmentConfigRecoveryConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentConfigRecoveryConfig {
	ScheduledSnapshotsConfig: github.com/cdktf/cdktf-provider-google-go/google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig.property.scheduledSnapshotsConfig">ScheduledSnapshotsConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a></code> | scheduled_snapshots_config block. |

---

##### `ScheduledSnapshotsConfig`<sup>Optional</sup> <a name="ScheduledSnapshotsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig.property.scheduledSnapshotsConfig"></a>

```go
ScheduledSnapshotsConfig ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

scheduled_snapshots_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#scheduled_snapshots_config ComposerEnvironment#scheduled_snapshots_config}

---

### ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig <a name="ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig {
	Enabled: interface{},
	SnapshotCreationSchedule: *string,
	SnapshotLocation: *string,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | When enabled, Cloud Composer periodically saves snapshots of your environment to a Cloud Storage bucket. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotCreationSchedule">SnapshotCreationSchedule</a></code> | <code>*string</code> | Snapshot schedule, in the unix-cron format. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotLocation">SnapshotLocation</a></code> | <code>*string</code> | the URI of a bucket folder where to save the snapshot. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | A time zone for the schedule. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

When enabled, Cloud Composer periodically saves snapshots of your environment to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#enabled ComposerEnvironment#enabled}

---

##### `SnapshotCreationSchedule`<sup>Optional</sup> <a name="SnapshotCreationSchedule" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotCreationSchedule"></a>

```go
SnapshotCreationSchedule *string
```

- *Type:* *string

Snapshot schedule, in the unix-cron format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#snapshot_creation_schedule ComposerEnvironment#snapshot_creation_schedule}

---

##### `SnapshotLocation`<sup>Optional</sup> <a name="SnapshotLocation" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotLocation"></a>

```go
SnapshotLocation *string
```

- *Type:* *string

the URI of a bucket folder where to save the snapshot.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#snapshot_location ComposerEnvironment#snapshot_location}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

A time zone for the schedule.

This value is a time offset and does not take into account daylight saving time changes. Valid values are from UTC-12 to UTC+12. Examples: UTC, UTC-01, UTC+03.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#time_zone ComposerEnvironment#time_zone}

---

### ComposerEnvironmentConfigSoftwareConfig <a name="ComposerEnvironmentConfigSoftwareConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentConfigSoftwareConfig {
	AirflowConfigOverrides: *map[string]*string,
	EnvVariables: *map[string]*string,
	ImageVersion: *string,
	PypiPackages: *map[string]*string,
	PythonVersion: *string,
	SchedulerCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.airflowConfigOverrides">AirflowConfigOverrides</a></code> | <code>*map[string]*string</code> | Apache Airflow configuration properties to override. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.envVariables">EnvVariables</a></code> | <code>*map[string]*string</code> | Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.imageVersion">ImageVersion</a></code> | <code>*string</code> | The version of the software running in the environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.pypiPackages">PypiPackages</a></code> | <code>*map[string]*string</code> | Custom Python Package Index (PyPI) packages to be installed in the environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.pythonVersion">PythonVersion</a></code> | <code>*string</code> | The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.schedulerCount">SchedulerCount</a></code> | <code>*f64</code> | The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*. |

---

##### `AirflowConfigOverrides`<sup>Optional</sup> <a name="AirflowConfigOverrides" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.airflowConfigOverrides"></a>

```go
AirflowConfigOverrides *map[string]*string
```

- *Type:* *map[string]*string

Apache Airflow configuration properties to override.

Property keys contain the section and property names, separated by a hyphen, for example "core-dags_are_paused_at_creation". Section names must not contain hyphens ("-"), opening square brackets ("["), or closing square brackets ("]"). The property name must not be empty and cannot contain "=" or ";". Section and property names cannot contain characters: "." Apache Airflow configuration property names must be written in snake_case. Property values can contain any character, and can be written in any lower/upper case format. Certain Apache Airflow configuration property values are blacklisted, and cannot be overridden.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#airflow_config_overrides ComposerEnvironment#airflow_config_overrides}

---

##### `EnvVariables`<sup>Optional</sup> <a name="EnvVariables" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.envVariables"></a>

```go
EnvVariables *map[string]*string
```

- *Type:* *map[string]*string

Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes.

Environment variable names must match the regular expression [a-zA-Z_][a-zA-Z0-9_]*. They cannot specify Apache Airflow software configuration overrides (they cannot match the regular expression AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+), and they cannot match any of the following reserved names: AIRFLOW_HOME C_FORCE_ROOT CONTAINER_NAME DAGS_FOLDER GCP_PROJECT GCS_BUCKET GKE_CLUSTER_NAME SQL_DATABASE SQL_INSTANCE SQL_PASSWORD SQL_PROJECT SQL_REGION SQL_USER.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#env_variables ComposerEnvironment#env_variables}

---

##### `ImageVersion`<sup>Optional</sup> <a name="ImageVersion" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.imageVersion"></a>

```go
ImageVersion *string
```

- *Type:* *string

The version of the software running in the environment.

This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression composer-([0-9]+(.[0-9]+.[0-9]+(-preview.[0-9]+)?)?|latest)-airflow-([0-9]+(.[0-9]+(.[0-9]+)?)?). The Cloud Composer portion of the image version is a full semantic version, or an alias in the form of major version number or 'latest'. The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. See documentation for more details and version list.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#image_version ComposerEnvironment#image_version}

---

##### `PypiPackages`<sup>Optional</sup> <a name="PypiPackages" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.pypiPackages"></a>

```go
PypiPackages *map[string]*string
```

- *Type:* *map[string]*string

Custom Python Package Index (PyPI) packages to be installed in the environment.

Keys refer to the lowercase package name (e.g. "numpy"). Values are the lowercase extras and version specifier (e.g. "==1.12.0", "[devel,gcp_api]", "[devel]>=1.8.2, <1.9.2"). To specify a package without pinning it to a version specifier, use the empty string as the value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#pypi_packages ComposerEnvironment#pypi_packages}

---

##### `PythonVersion`<sup>Optional</sup> <a name="PythonVersion" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.pythonVersion"></a>

```go
PythonVersion *string
```

- *Type:* *string

The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes.

Can be set to '2' or '3'. If not specified, the default is '2'. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use Python major version 3.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#python_version ComposerEnvironment#python_version}

---

##### `SchedulerCount`<sup>Optional</sup> <a name="SchedulerCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.schedulerCount"></a>

```go
SchedulerCount *f64
```

- *Type:* *f64

The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#scheduler_count ComposerEnvironment#scheduler_count}

---

### ComposerEnvironmentConfigWebServerConfig <a name="ComposerEnvironmentConfigWebServerConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentConfigWebServerConfig {
	MachineType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig.property.machineType">MachineType</a></code> | <code>*string</code> | Optional. |

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

Optional.

Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. If not specified, composer-n1-webserver-2 will be used. Value custom is returned only in response, if Airflow web server parameters were manually changed to a non-standard values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#machine_type ComposerEnvironment#machine_type}

---

### ComposerEnvironmentConfigWebServerNetworkAccessControl <a name="ComposerEnvironmentConfigWebServerNetworkAccessControl" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl {
	AllowedIpRange: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl.property.allowedIpRange">AllowedIpRange</a></code> | <code>interface{}</code> | allowed_ip_range block. |

---

##### `AllowedIpRange`<sup>Optional</sup> <a name="AllowedIpRange" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl.property.allowedIpRange"></a>

```go
AllowedIpRange interface{}
```

- *Type:* interface{}

allowed_ip_range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#allowed_ip_range ComposerEnvironment#allowed_ip_range}

---

### ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange <a name="ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange {
	Value: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.value">Value</a></code> | <code>*string</code> | IP address or range, defined using CIDR notation, of requests that this rule applies to. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.description">Description</a></code> | <code>*string</code> | A description of this ip range. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.value"></a>

```go
Value *string
```

- *Type:* *string

IP address or range, defined using CIDR notation, of requests that this rule applies to.

Examples: 192.168.1.1 or 192.168.0.0/16 or 2001:db8::/32 or 2001:0db8:0000:0042:0000:8a2e:0370:7334. IP range prefixes should be properly truncated. For example, 1.2.3.4/24 should be truncated to 1.2.3.0/24. Similarly, for IPv6, 2001:db8::1/32 should be truncated to 2001:db8::/32.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#value ComposerEnvironment#value}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of this ip range.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#description ComposerEnvironment#description}

---

### ComposerEnvironmentConfigWorkloadsConfig <a name="ComposerEnvironmentConfigWorkloadsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentConfigWorkloadsConfig {
	Scheduler: github.com/cdktf/cdktf-provider-google-go/google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler,
	WebServer: github.com/cdktf/cdktf-provider-google-go/google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer,
	Worker: github.com/cdktf/cdktf-provider-google-go/google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.scheduler">Scheduler</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a></code> | scheduler block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.webServer">WebServer</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a></code> | web_server block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.worker">Worker</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a></code> | worker block. |

---

##### `Scheduler`<sup>Optional</sup> <a name="Scheduler" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.scheduler"></a>

```go
Scheduler ComposerEnvironmentConfigWorkloadsConfigScheduler
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a>

scheduler block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#scheduler ComposerEnvironment#scheduler}

---

##### `WebServer`<sup>Optional</sup> <a name="WebServer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.webServer"></a>

```go
WebServer ComposerEnvironmentConfigWorkloadsConfigWebServer
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a>

web_server block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#web_server ComposerEnvironment#web_server}

---

##### `Worker`<sup>Optional</sup> <a name="Worker" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.worker"></a>

```go
Worker ComposerEnvironmentConfigWorkloadsConfigWorker
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a>

worker block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#worker ComposerEnvironment#worker}

---

### ComposerEnvironmentConfigWorkloadsConfigScheduler <a name="ComposerEnvironmentConfigWorkloadsConfigScheduler" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler {
	Count: *f64,
	Cpu: *f64,
	MemoryGb: *f64,
	StorageGb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.count">Count</a></code> | <code>*f64</code> | The number of schedulers. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.cpu">Cpu</a></code> | <code>*f64</code> | CPU request and limit for a single Airflow scheduler replica. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | Memory (GB) request and limit for a single Airflow scheduler replica. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.storageGb">StorageGb</a></code> | <code>*f64</code> | Storage (GB) request and limit for a single Airflow scheduler replica. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

The number of schedulers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#count ComposerEnvironment#count}

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.cpu"></a>

```go
Cpu *f64
```

- *Type:* *f64

CPU request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cpu ComposerEnvironment#cpu}

---

##### `MemoryGb`<sup>Optional</sup> <a name="MemoryGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.memoryGb"></a>

```go
MemoryGb *f64
```

- *Type:* *f64

Memory (GB) request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#memory_gb ComposerEnvironment#memory_gb}

---

##### `StorageGb`<sup>Optional</sup> <a name="StorageGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.storageGb"></a>

```go
StorageGb *f64
```

- *Type:* *f64

Storage (GB) request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#storage_gb ComposerEnvironment#storage_gb}

---

### ComposerEnvironmentConfigWorkloadsConfigWebServer <a name="ComposerEnvironmentConfigWorkloadsConfigWebServer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer {
	Cpu: *f64,
	MemoryGb: *f64,
	StorageGb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.property.cpu">Cpu</a></code> | <code>*f64</code> | CPU request and limit for Airflow web server. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | Memory (GB) request and limit for Airflow web server. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.property.storageGb">StorageGb</a></code> | <code>*f64</code> | Storage (GB) request and limit for Airflow web server. |

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.property.cpu"></a>

```go
Cpu *f64
```

- *Type:* *f64

CPU request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cpu ComposerEnvironment#cpu}

---

##### `MemoryGb`<sup>Optional</sup> <a name="MemoryGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.property.memoryGb"></a>

```go
MemoryGb *f64
```

- *Type:* *f64

Memory (GB) request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#memory_gb ComposerEnvironment#memory_gb}

---

##### `StorageGb`<sup>Optional</sup> <a name="StorageGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.property.storageGb"></a>

```go
StorageGb *f64
```

- *Type:* *f64

Storage (GB) request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#storage_gb ComposerEnvironment#storage_gb}

---

### ComposerEnvironmentConfigWorkloadsConfigWorker <a name="ComposerEnvironmentConfigWorkloadsConfigWorker" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentConfigWorkloadsConfigWorker {
	Cpu: *f64,
	MaxCount: *f64,
	MemoryGb: *f64,
	MinCount: *f64,
	StorageGb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.cpu">Cpu</a></code> | <code>*f64</code> | CPU request and limit for a single Airflow worker replica. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.maxCount">MaxCount</a></code> | <code>*f64</code> | Maximum number of workers for autoscaling. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | Memory (GB) request and limit for a single Airflow worker replica. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.minCount">MinCount</a></code> | <code>*f64</code> | Minimum number of workers for autoscaling. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.storageGb">StorageGb</a></code> | <code>*f64</code> | Storage (GB) request and limit for a single Airflow worker replica. |

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.cpu"></a>

```go
Cpu *f64
```

- *Type:* *f64

CPU request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cpu ComposerEnvironment#cpu}

---

##### `MaxCount`<sup>Optional</sup> <a name="MaxCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.maxCount"></a>

```go
MaxCount *f64
```

- *Type:* *f64

Maximum number of workers for autoscaling.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#max_count ComposerEnvironment#max_count}

---

##### `MemoryGb`<sup>Optional</sup> <a name="MemoryGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.memoryGb"></a>

```go
MemoryGb *f64
```

- *Type:* *f64

Memory (GB) request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#memory_gb ComposerEnvironment#memory_gb}

---

##### `MinCount`<sup>Optional</sup> <a name="MinCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.minCount"></a>

```go
MinCount *f64
```

- *Type:* *f64

Minimum number of workers for autoscaling.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#min_count ComposerEnvironment#min_count}

---

##### `StorageGb`<sup>Optional</sup> <a name="StorageGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.storageGb"></a>

```go
StorageGb *f64
```

- *Type:* *f64

Storage (GB) request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#storage_gb ComposerEnvironment#storage_gb}

---

### ComposerEnvironmentTimeouts <a name="ComposerEnvironmentTimeouts" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

&composerenvironment.ComposerEnvironmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#create ComposerEnvironment#create}. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#delete ComposerEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#update ComposerEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#create ComposerEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#delete ComposerEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#update ComposerEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComposerEnvironmentConfigAOutputReference <a name="ComposerEnvironmentConfigAOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComposerEnvironmentConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putDatabaseConfig">PutDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMasterAuthorizedNetworksConfig">PutMasterAuthorizedNetworksConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putNodeConfig">PutNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig">PutPrivateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putRecoveryConfig">PutRecoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putSoftwareConfig">PutSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWebServerConfig">PutWebServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWebServerNetworkAccessControl">PutWebServerNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWorkloadsConfig">PutWorkloadsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetDatabaseConfig">ResetDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetEnvironmentSize">ResetEnvironmentSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetMasterAuthorizedNetworksConfig">ResetMasterAuthorizedNetworksConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetNodeConfig">ResetNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetPrivateEnvironmentConfig">ResetPrivateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetRecoveryConfig">ResetRecoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetSoftwareConfig">ResetSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetWebServerConfig">ResetWebServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetWebServerNetworkAccessControl">ResetWebServerNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetWorkloadsConfig">ResetWorkloadsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabaseConfig` <a name="PutDatabaseConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putDatabaseConfig"></a>

```go
func PutDatabaseConfig(value ComposerEnvironmentConfigDatabaseConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putDatabaseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a>

---

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putEncryptionConfig"></a>

```go
func PutEncryptionConfig(value ComposerEnvironmentConfigEncryptionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMaintenanceWindow"></a>

```go
func PutMaintenanceWindow(value ComposerEnvironmentConfigMaintenanceWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a>

---

##### `PutMasterAuthorizedNetworksConfig` <a name="PutMasterAuthorizedNetworksConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMasterAuthorizedNetworksConfig"></a>

```go
func PutMasterAuthorizedNetworksConfig(value ComposerEnvironmentConfigMasterAuthorizedNetworksConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMasterAuthorizedNetworksConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

---

##### `PutNodeConfig` <a name="PutNodeConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putNodeConfig"></a>

```go
func PutNodeConfig(value ComposerEnvironmentConfigNodeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a>

---

##### `PutPrivateEnvironmentConfig` <a name="PutPrivateEnvironmentConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig"></a>

```go
func PutPrivateEnvironmentConfig(value ComposerEnvironmentConfigPrivateEnvironmentConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a>

---

##### `PutRecoveryConfig` <a name="PutRecoveryConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putRecoveryConfig"></a>

```go
func PutRecoveryConfig(value ComposerEnvironmentConfigRecoveryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putRecoveryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a>

---

##### `PutSoftwareConfig` <a name="PutSoftwareConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putSoftwareConfig"></a>

```go
func PutSoftwareConfig(value ComposerEnvironmentConfigSoftwareConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putSoftwareConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a>

---

##### `PutWebServerConfig` <a name="PutWebServerConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWebServerConfig"></a>

```go
func PutWebServerConfig(value ComposerEnvironmentConfigWebServerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWebServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a>

---

##### `PutWebServerNetworkAccessControl` <a name="PutWebServerNetworkAccessControl" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWebServerNetworkAccessControl"></a>

```go
func PutWebServerNetworkAccessControl(value ComposerEnvironmentConfigWebServerNetworkAccessControl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWebServerNetworkAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a>

---

##### `PutWorkloadsConfig` <a name="PutWorkloadsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWorkloadsConfig"></a>

```go
func PutWorkloadsConfig(value ComposerEnvironmentConfigWorkloadsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWorkloadsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a>

---

##### `ResetDatabaseConfig` <a name="ResetDatabaseConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetDatabaseConfig"></a>

```go
func ResetDatabaseConfig()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetEncryptionConfig"></a>

```go
func ResetEncryptionConfig()
```

##### `ResetEnvironmentSize` <a name="ResetEnvironmentSize" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetEnvironmentSize"></a>

```go
func ResetEnvironmentSize()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetMasterAuthorizedNetworksConfig` <a name="ResetMasterAuthorizedNetworksConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetMasterAuthorizedNetworksConfig"></a>

```go
func ResetMasterAuthorizedNetworksConfig()
```

##### `ResetNodeConfig` <a name="ResetNodeConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetNodeConfig"></a>

```go
func ResetNodeConfig()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetNodeCount"></a>

```go
func ResetNodeCount()
```

##### `ResetPrivateEnvironmentConfig` <a name="ResetPrivateEnvironmentConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetPrivateEnvironmentConfig"></a>

```go
func ResetPrivateEnvironmentConfig()
```

##### `ResetRecoveryConfig` <a name="ResetRecoveryConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetRecoveryConfig"></a>

```go
func ResetRecoveryConfig()
```

##### `ResetSoftwareConfig` <a name="ResetSoftwareConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetSoftwareConfig"></a>

```go
func ResetSoftwareConfig()
```

##### `ResetWebServerConfig` <a name="ResetWebServerConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetWebServerConfig"></a>

```go
func ResetWebServerConfig()
```

##### `ResetWebServerNetworkAccessControl` <a name="ResetWebServerNetworkAccessControl" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetWebServerNetworkAccessControl"></a>

```go
func ResetWebServerNetworkAccessControl()
```

##### `ResetWorkloadsConfig` <a name="ResetWorkloadsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetWorkloadsConfig"></a>

```go
func ResetWorkloadsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.airflowUri">AirflowUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.dagGcsPrefix">DagGcsPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.databaseConfig">DatabaseConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference">ComposerEnvironmentConfigDatabaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference">ComposerEnvironmentConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.gkeCluster">GkeCluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference">ComposerEnvironmentConfigMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfig">MasterAuthorizedNetworksConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference">ComposerEnvironmentConfigNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfig">PrivateEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference">ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.recoveryConfig">RecoveryConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference">ComposerEnvironmentConfigRecoveryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.softwareConfig">SoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference">ComposerEnvironmentConfigSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerConfig">WebServerConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference">ComposerEnvironmentConfigWebServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControl">WebServerNetworkAccessControl</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference">ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.workloadsConfig">WorkloadsConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference">ComposerEnvironmentConfigWorkloadsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.databaseConfigInput">DatabaseConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.environmentSizeInput">EnvironmentSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfigInput">MasterAuthorizedNetworksConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeConfigInput">NodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfigInput">PrivateEnvironmentConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.recoveryConfigInput">RecoveryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.softwareConfigInput">SoftwareConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerConfigInput">WebServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControlInput">WebServerNetworkAccessControlInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.workloadsConfigInput">WorkloadsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.environmentSize">EnvironmentSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AirflowUri`<sup>Required</sup> <a name="AirflowUri" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.airflowUri"></a>

```go
func AirflowUri() *string
```

- *Type:* *string

---

##### `DagGcsPrefix`<sup>Required</sup> <a name="DagGcsPrefix" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.dagGcsPrefix"></a>

```go
func DagGcsPrefix() *string
```

- *Type:* *string

---

##### `DatabaseConfig`<sup>Required</sup> <a name="DatabaseConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.databaseConfig"></a>

```go
func DatabaseConfig() ComposerEnvironmentConfigDatabaseConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference">ComposerEnvironmentConfigDatabaseConfigOutputReference</a>

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.encryptionConfig"></a>

```go
func EncryptionConfig() ComposerEnvironmentConfigEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference">ComposerEnvironmentConfigEncryptionConfigOutputReference</a>

---

##### `GkeCluster`<sup>Required</sup> <a name="GkeCluster" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.gkeCluster"></a>

```go
func GkeCluster() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() ComposerEnvironmentConfigMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference">ComposerEnvironmentConfigMaintenanceWindowOutputReference</a>

---

##### `MasterAuthorizedNetworksConfig`<sup>Required</sup> <a name="MasterAuthorizedNetworksConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfig"></a>

```go
func MasterAuthorizedNetworksConfig() ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference</a>

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeConfig"></a>

```go
func NodeConfig() ComposerEnvironmentConfigNodeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference">ComposerEnvironmentConfigNodeConfigOutputReference</a>

---

##### `PrivateEnvironmentConfig`<sup>Required</sup> <a name="PrivateEnvironmentConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfig"></a>

```go
func PrivateEnvironmentConfig() ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference">ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference</a>

---

##### `RecoveryConfig`<sup>Required</sup> <a name="RecoveryConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.recoveryConfig"></a>

```go
func RecoveryConfig() ComposerEnvironmentConfigRecoveryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference">ComposerEnvironmentConfigRecoveryConfigOutputReference</a>

---

##### `SoftwareConfig`<sup>Required</sup> <a name="SoftwareConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.softwareConfig"></a>

```go
func SoftwareConfig() ComposerEnvironmentConfigSoftwareConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference">ComposerEnvironmentConfigSoftwareConfigOutputReference</a>

---

##### `WebServerConfig`<sup>Required</sup> <a name="WebServerConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerConfig"></a>

```go
func WebServerConfig() ComposerEnvironmentConfigWebServerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference">ComposerEnvironmentConfigWebServerConfigOutputReference</a>

---

##### `WebServerNetworkAccessControl`<sup>Required</sup> <a name="WebServerNetworkAccessControl" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControl"></a>

```go
func WebServerNetworkAccessControl() ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference">ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference</a>

---

##### `WorkloadsConfig`<sup>Required</sup> <a name="WorkloadsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.workloadsConfig"></a>

```go
func WorkloadsConfig() ComposerEnvironmentConfigWorkloadsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference">ComposerEnvironmentConfigWorkloadsConfigOutputReference</a>

---

##### `DatabaseConfigInput`<sup>Optional</sup> <a name="DatabaseConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.databaseConfigInput"></a>

```go
func DatabaseConfigInput() ComposerEnvironmentConfigDatabaseConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a>

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.encryptionConfigInput"></a>

```go
func EncryptionConfigInput() ComposerEnvironmentConfigEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a>

---

##### `EnvironmentSizeInput`<sup>Optional</sup> <a name="EnvironmentSizeInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.environmentSizeInput"></a>

```go
func EnvironmentSizeInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() ComposerEnvironmentConfigMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a>

---

##### `MasterAuthorizedNetworksConfigInput`<sup>Optional</sup> <a name="MasterAuthorizedNetworksConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfigInput"></a>

```go
func MasterAuthorizedNetworksConfigInput() ComposerEnvironmentConfigMasterAuthorizedNetworksConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

---

##### `NodeConfigInput`<sup>Optional</sup> <a name="NodeConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeConfigInput"></a>

```go
func NodeConfigInput() ComposerEnvironmentConfigNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a>

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `PrivateEnvironmentConfigInput`<sup>Optional</sup> <a name="PrivateEnvironmentConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfigInput"></a>

```go
func PrivateEnvironmentConfigInput() ComposerEnvironmentConfigPrivateEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a>

---

##### `RecoveryConfigInput`<sup>Optional</sup> <a name="RecoveryConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.recoveryConfigInput"></a>

```go
func RecoveryConfigInput() ComposerEnvironmentConfigRecoveryConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a>

---

##### `SoftwareConfigInput`<sup>Optional</sup> <a name="SoftwareConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.softwareConfigInput"></a>

```go
func SoftwareConfigInput() ComposerEnvironmentConfigSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a>

---

##### `WebServerConfigInput`<sup>Optional</sup> <a name="WebServerConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerConfigInput"></a>

```go
func WebServerConfigInput() ComposerEnvironmentConfigWebServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a>

---

##### `WebServerNetworkAccessControlInput`<sup>Optional</sup> <a name="WebServerNetworkAccessControlInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControlInput"></a>

```go
func WebServerNetworkAccessControlInput() ComposerEnvironmentConfigWebServerNetworkAccessControl
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a>

---

##### `WorkloadsConfigInput`<sup>Optional</sup> <a name="WorkloadsConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.workloadsConfigInput"></a>

```go
func WorkloadsConfigInput() ComposerEnvironmentConfigWorkloadsConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a>

---

##### `EnvironmentSize`<sup>Required</sup> <a name="EnvironmentSize" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.environmentSize"></a>

```go
func EnvironmentSize() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() ComposerEnvironmentConfigA
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a>

---


### ComposerEnvironmentConfigDatabaseConfigOutputReference <a name="ComposerEnvironmentConfigDatabaseConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigDatabaseConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComposerEnvironmentConfigDatabaseConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComposerEnvironmentConfigDatabaseConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a>

---


### ComposerEnvironmentConfigEncryptionConfigOutputReference <a name="ComposerEnvironmentConfigEncryptionConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigEncryptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComposerEnvironmentConfigEncryptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComposerEnvironmentConfigEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a>

---


### ComposerEnvironmentConfigMaintenanceWindowOutputReference <a name="ComposerEnvironmentConfigMaintenanceWindowOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComposerEnvironmentConfigMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrenceInput">RecurrenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrence">Recurrence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrenceInput"></a>

```go
func RecurrenceInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrence"></a>

```go
func Recurrence() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() ComposerEnvironmentConfigMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a>

---


### ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList <a name="ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get"></a>

```go
func Get(index *f64) ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference <a name="ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlockInput">CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlockInput"></a>

```go
func CidrBlockInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference <a name="ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.putCidrBlocks">PutCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resetCidrBlocks">ResetCidrBlocks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCidrBlocks` <a name="PutCidrBlocks" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.putCidrBlocks"></a>

```go
func PutCidrBlocks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.putCidrBlocks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCidrBlocks` <a name="ResetCidrBlocks" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resetCidrBlocks"></a>

```go
func ResetCidrBlocks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocks">CidrBlocks</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocksInput">CidrBlocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrBlocks`<sup>Required</sup> <a name="CidrBlocks" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocks"></a>

```go
func CidrBlocks() ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList</a>

---

##### `CidrBlocksInput`<sup>Optional</sup> <a name="CidrBlocksInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocksInput"></a>

```go
func CidrBlocksInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComposerEnvironmentConfigMasterAuthorizedNetworksConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

---


### ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList <a name="ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigNodeConfigIpAllocationPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.get"></a>

```go
func Get(index *f64) ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference <a name="ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterIpv4CidrBlock">ResetClusterIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterSecondaryRangeName">ResetClusterSecondaryRangeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesIpv4CidrBlock">ResetServicesIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesSecondaryRangeName">ResetServicesSecondaryRangeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetUseIpAliases">ResetUseIpAliases</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterIpv4CidrBlock` <a name="ResetClusterIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterIpv4CidrBlock"></a>

```go
func ResetClusterIpv4CidrBlock()
```

##### `ResetClusterSecondaryRangeName` <a name="ResetClusterSecondaryRangeName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterSecondaryRangeName"></a>

```go
func ResetClusterSecondaryRangeName()
```

##### `ResetServicesIpv4CidrBlock` <a name="ResetServicesIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesIpv4CidrBlock"></a>

```go
func ResetServicesIpv4CidrBlock()
```

##### `ResetServicesSecondaryRangeName` <a name="ResetServicesSecondaryRangeName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesSecondaryRangeName"></a>

```go
func ResetServicesSecondaryRangeName()
```

##### `ResetUseIpAliases` <a name="ResetUseIpAliases" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetUseIpAliases"></a>

```go
func ResetUseIpAliases()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlockInput">ClusterIpv4CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeNameInput">ClusterSecondaryRangeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlockInput">ServicesIpv4CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeNameInput">ServicesSecondaryRangeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliasesInput">UseIpAliasesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlock">ClusterIpv4CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeName">ClusterSecondaryRangeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlock">ServicesIpv4CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeName">ServicesSecondaryRangeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliases">UseIpAliases</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterIpv4CidrBlockInput`<sup>Optional</sup> <a name="ClusterIpv4CidrBlockInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlockInput"></a>

```go
func ClusterIpv4CidrBlockInput() *string
```

- *Type:* *string

---

##### `ClusterSecondaryRangeNameInput`<sup>Optional</sup> <a name="ClusterSecondaryRangeNameInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeNameInput"></a>

```go
func ClusterSecondaryRangeNameInput() *string
```

- *Type:* *string

---

##### `ServicesIpv4CidrBlockInput`<sup>Optional</sup> <a name="ServicesIpv4CidrBlockInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlockInput"></a>

```go
func ServicesIpv4CidrBlockInput() *string
```

- *Type:* *string

---

##### `ServicesSecondaryRangeNameInput`<sup>Optional</sup> <a name="ServicesSecondaryRangeNameInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeNameInput"></a>

```go
func ServicesSecondaryRangeNameInput() *string
```

- *Type:* *string

---

##### `UseIpAliasesInput`<sup>Optional</sup> <a name="UseIpAliasesInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliasesInput"></a>

```go
func UseIpAliasesInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterIpv4CidrBlock`<sup>Required</sup> <a name="ClusterIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlock"></a>

```go
func ClusterIpv4CidrBlock() *string
```

- *Type:* *string

---

##### `ClusterSecondaryRangeName`<sup>Required</sup> <a name="ClusterSecondaryRangeName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeName"></a>

```go
func ClusterSecondaryRangeName() *string
```

- *Type:* *string

---

##### `ServicesIpv4CidrBlock`<sup>Required</sup> <a name="ServicesIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlock"></a>

```go
func ServicesIpv4CidrBlock() *string
```

- *Type:* *string

---

##### `ServicesSecondaryRangeName`<sup>Required</sup> <a name="ServicesSecondaryRangeName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeName"></a>

```go
func ServicesSecondaryRangeName() *string
```

- *Type:* *string

---

##### `UseIpAliases`<sup>Required</sup> <a name="UseIpAliases" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliases"></a>

```go
func UseIpAliases() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComposerEnvironmentConfigNodeConfigOutputReference <a name="ComposerEnvironmentConfigNodeConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigNodeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComposerEnvironmentConfigNodeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy">PutIpAllocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetEnableIpMasqAgent">ResetEnableIpMasqAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetIpAllocationPolicy">ResetIpAllocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetOauthScopes">ResetOauthScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpAllocationPolicy` <a name="PutIpAllocationPolicy" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy"></a>

```go
func PutIpAllocationPolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetDiskSizeGb"></a>

```go
func ResetDiskSizeGb()
```

##### `ResetEnableIpMasqAgent` <a name="ResetEnableIpMasqAgent" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetEnableIpMasqAgent"></a>

```go
func ResetEnableIpMasqAgent()
```

##### `ResetIpAllocationPolicy` <a name="ResetIpAllocationPolicy" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetIpAllocationPolicy"></a>

```go
func ResetIpAllocationPolicy()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetOauthScopes` <a name="ResetOauthScopes" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetOauthScopes"></a>

```go
func ResetOauthScopes()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetTags"></a>

```go
func ResetTags()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetZone"></a>

```go
func ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicy">IpAllocationPolicy</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList">ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgentInput">EnableIpMasqAgentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicyInput">IpAllocationPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopesInput">OauthScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgent">EnableIpMasqAgent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAllocationPolicy`<sup>Required</sup> <a name="IpAllocationPolicy" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicy"></a>

```go
func IpAllocationPolicy() ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList">ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList</a>

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `EnableIpMasqAgentInput`<sup>Optional</sup> <a name="EnableIpMasqAgentInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgentInput"></a>

```go
func EnableIpMasqAgentInput() interface{}
```

- *Type:* interface{}

---

##### `IpAllocationPolicyInput`<sup>Optional</sup> <a name="IpAllocationPolicyInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicyInput"></a>

```go
func IpAllocationPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `OauthScopesInput`<sup>Optional</sup> <a name="OauthScopesInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopesInput"></a>

```go
func OauthScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `EnableIpMasqAgent`<sup>Required</sup> <a name="EnableIpMasqAgent" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgent"></a>

```go
func EnableIpMasqAgent() interface{}
```

- *Type:* interface{}

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopes"></a>

```go
func OauthScopes() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComposerEnvironmentConfigNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a>

---


### ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference <a name="ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerConnectionSubnetwork">ResetCloudComposerConnectionSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerNetworkIpv4CidrBlock">ResetCloudComposerNetworkIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudSqlIpv4CidrBlock">ResetCloudSqlIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivateEndpoint">ResetEnablePrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivatelyUsedPublicIps">ResetEnablePrivatelyUsedPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetMasterIpv4CidrBlock">ResetMasterIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetWebServerIpv4CidrBlock">ResetWebServerIpv4CidrBlock</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudComposerConnectionSubnetwork` <a name="ResetCloudComposerConnectionSubnetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerConnectionSubnetwork"></a>

```go
func ResetCloudComposerConnectionSubnetwork()
```

##### `ResetCloudComposerNetworkIpv4CidrBlock` <a name="ResetCloudComposerNetworkIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerNetworkIpv4CidrBlock"></a>

```go
func ResetCloudComposerNetworkIpv4CidrBlock()
```

##### `ResetCloudSqlIpv4CidrBlock` <a name="ResetCloudSqlIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudSqlIpv4CidrBlock"></a>

```go
func ResetCloudSqlIpv4CidrBlock()
```

##### `ResetEnablePrivateEndpoint` <a name="ResetEnablePrivateEndpoint" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivateEndpoint"></a>

```go
func ResetEnablePrivateEndpoint()
```

##### `ResetEnablePrivatelyUsedPublicIps` <a name="ResetEnablePrivatelyUsedPublicIps" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivatelyUsedPublicIps"></a>

```go
func ResetEnablePrivatelyUsedPublicIps()
```

##### `ResetMasterIpv4CidrBlock` <a name="ResetMasterIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetMasterIpv4CidrBlock"></a>

```go
func ResetMasterIpv4CidrBlock()
```

##### `ResetWebServerIpv4CidrBlock` <a name="ResetWebServerIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetWebServerIpv4CidrBlock"></a>

```go
func ResetWebServerIpv4CidrBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetworkInput">CloudComposerConnectionSubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlockInput">CloudComposerNetworkIpv4CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlockInput">CloudSqlIpv4CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpointInput">EnablePrivateEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIpsInput">EnablePrivatelyUsedPublicIpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlockInput">MasterIpv4CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlockInput">WebServerIpv4CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetwork">CloudComposerConnectionSubnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlock">CloudComposerNetworkIpv4CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlock">CloudSqlIpv4CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpoint">EnablePrivateEndpoint</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIps">EnablePrivatelyUsedPublicIps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlock">MasterIpv4CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlock">WebServerIpv4CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudComposerConnectionSubnetworkInput`<sup>Optional</sup> <a name="CloudComposerConnectionSubnetworkInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetworkInput"></a>

```go
func CloudComposerConnectionSubnetworkInput() *string
```

- *Type:* *string

---

##### `CloudComposerNetworkIpv4CidrBlockInput`<sup>Optional</sup> <a name="CloudComposerNetworkIpv4CidrBlockInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlockInput"></a>

```go
func CloudComposerNetworkIpv4CidrBlockInput() *string
```

- *Type:* *string

---

##### `CloudSqlIpv4CidrBlockInput`<sup>Optional</sup> <a name="CloudSqlIpv4CidrBlockInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlockInput"></a>

```go
func CloudSqlIpv4CidrBlockInput() *string
```

- *Type:* *string

---

##### `EnablePrivateEndpointInput`<sup>Optional</sup> <a name="EnablePrivateEndpointInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpointInput"></a>

```go
func EnablePrivateEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `EnablePrivatelyUsedPublicIpsInput`<sup>Optional</sup> <a name="EnablePrivatelyUsedPublicIpsInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIpsInput"></a>

```go
func EnablePrivatelyUsedPublicIpsInput() interface{}
```

- *Type:* interface{}

---

##### `MasterIpv4CidrBlockInput`<sup>Optional</sup> <a name="MasterIpv4CidrBlockInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlockInput"></a>

```go
func MasterIpv4CidrBlockInput() *string
```

- *Type:* *string

---

##### `WebServerIpv4CidrBlockInput`<sup>Optional</sup> <a name="WebServerIpv4CidrBlockInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlockInput"></a>

```go
func WebServerIpv4CidrBlockInput() *string
```

- *Type:* *string

---

##### `CloudComposerConnectionSubnetwork`<sup>Required</sup> <a name="CloudComposerConnectionSubnetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetwork"></a>

```go
func CloudComposerConnectionSubnetwork() *string
```

- *Type:* *string

---

##### `CloudComposerNetworkIpv4CidrBlock`<sup>Required</sup> <a name="CloudComposerNetworkIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlock"></a>

```go
func CloudComposerNetworkIpv4CidrBlock() *string
```

- *Type:* *string

---

##### `CloudSqlIpv4CidrBlock`<sup>Required</sup> <a name="CloudSqlIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlock"></a>

```go
func CloudSqlIpv4CidrBlock() *string
```

- *Type:* *string

---

##### `EnablePrivateEndpoint`<sup>Required</sup> <a name="EnablePrivateEndpoint" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpoint"></a>

```go
func EnablePrivateEndpoint() interface{}
```

- *Type:* interface{}

---

##### `EnablePrivatelyUsedPublicIps`<sup>Required</sup> <a name="EnablePrivatelyUsedPublicIps" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIps"></a>

```go
func EnablePrivatelyUsedPublicIps() interface{}
```

- *Type:* interface{}

---

##### `MasterIpv4CidrBlock`<sup>Required</sup> <a name="MasterIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlock"></a>

```go
func MasterIpv4CidrBlock() *string
```

- *Type:* *string

---

##### `WebServerIpv4CidrBlock`<sup>Required</sup> <a name="WebServerIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlock"></a>

```go
func WebServerIpv4CidrBlock() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComposerEnvironmentConfigPrivateEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a>

---


### ComposerEnvironmentConfigRecoveryConfigOutputReference <a name="ComposerEnvironmentConfigRecoveryConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigRecoveryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComposerEnvironmentConfigRecoveryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig">PutScheduledSnapshotsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.resetScheduledSnapshotsConfig">ResetScheduledSnapshotsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScheduledSnapshotsConfig` <a name="PutScheduledSnapshotsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig"></a>

```go
func PutScheduledSnapshotsConfig(value ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

---

##### `ResetScheduledSnapshotsConfig` <a name="ResetScheduledSnapshotsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.resetScheduledSnapshotsConfig"></a>

```go
func ResetScheduledSnapshotsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfig">ScheduledSnapshotsConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfigInput">ScheduledSnapshotsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScheduledSnapshotsConfig`<sup>Required</sup> <a name="ScheduledSnapshotsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfig"></a>

```go
func ScheduledSnapshotsConfig() ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference</a>

---

##### `ScheduledSnapshotsConfigInput`<sup>Optional</sup> <a name="ScheduledSnapshotsConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfigInput"></a>

```go
func ScheduledSnapshotsConfigInput() ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComposerEnvironmentConfigRecoveryConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a>

---


### ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference <a name="ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotCreationSchedule">ResetSnapshotCreationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotLocation">ResetSnapshotLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSnapshotCreationSchedule` <a name="ResetSnapshotCreationSchedule" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotCreationSchedule"></a>

```go
func ResetSnapshotCreationSchedule()
```

##### `ResetSnapshotLocation` <a name="ResetSnapshotLocation" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotLocation"></a>

```go
func ResetSnapshotLocation()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationScheduleInput">SnapshotCreationScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocationInput">SnapshotLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationSchedule">SnapshotCreationSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocation">SnapshotLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotCreationScheduleInput`<sup>Optional</sup> <a name="SnapshotCreationScheduleInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationScheduleInput"></a>

```go
func SnapshotCreationScheduleInput() *string
```

- *Type:* *string

---

##### `SnapshotLocationInput`<sup>Optional</sup> <a name="SnapshotLocationInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocationInput"></a>

```go
func SnapshotLocationInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `SnapshotCreationSchedule`<sup>Required</sup> <a name="SnapshotCreationSchedule" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationSchedule"></a>

```go
func SnapshotCreationSchedule() *string
```

- *Type:* *string

---

##### `SnapshotLocation`<sup>Required</sup> <a name="SnapshotLocation" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocation"></a>

```go
func SnapshotLocation() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

---


### ComposerEnvironmentConfigSoftwareConfigOutputReference <a name="ComposerEnvironmentConfigSoftwareConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigSoftwareConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComposerEnvironmentConfigSoftwareConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetAirflowConfigOverrides">ResetAirflowConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetEnvVariables">ResetEnvVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetImageVersion">ResetImageVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetPypiPackages">ResetPypiPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetPythonVersion">ResetPythonVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetSchedulerCount">ResetSchedulerCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAirflowConfigOverrides` <a name="ResetAirflowConfigOverrides" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetAirflowConfigOverrides"></a>

```go
func ResetAirflowConfigOverrides()
```

##### `ResetEnvVariables` <a name="ResetEnvVariables" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetEnvVariables"></a>

```go
func ResetEnvVariables()
```

##### `ResetImageVersion` <a name="ResetImageVersion" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetImageVersion"></a>

```go
func ResetImageVersion()
```

##### `ResetPypiPackages` <a name="ResetPypiPackages" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetPypiPackages"></a>

```go
func ResetPypiPackages()
```

##### `ResetPythonVersion` <a name="ResetPythonVersion" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetPythonVersion"></a>

```go
func ResetPythonVersion()
```

##### `ResetSchedulerCount` <a name="ResetSchedulerCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetSchedulerCount"></a>

```go
func ResetSchedulerCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverridesInput">AirflowConfigOverridesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariablesInput">EnvVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersionInput">ImageVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackagesInput">PypiPackagesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersionInput">PythonVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCountInput">SchedulerCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverrides">AirflowConfigOverrides</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariables">EnvVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersion">ImageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackages">PypiPackages</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersion">PythonVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCount">SchedulerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AirflowConfigOverridesInput`<sup>Optional</sup> <a name="AirflowConfigOverridesInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverridesInput"></a>

```go
func AirflowConfigOverridesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EnvVariablesInput`<sup>Optional</sup> <a name="EnvVariablesInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariablesInput"></a>

```go
func EnvVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageVersionInput`<sup>Optional</sup> <a name="ImageVersionInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersionInput"></a>

```go
func ImageVersionInput() *string
```

- *Type:* *string

---

##### `PypiPackagesInput`<sup>Optional</sup> <a name="PypiPackagesInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackagesInput"></a>

```go
func PypiPackagesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PythonVersionInput`<sup>Optional</sup> <a name="PythonVersionInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersionInput"></a>

```go
func PythonVersionInput() *string
```

- *Type:* *string

---

##### `SchedulerCountInput`<sup>Optional</sup> <a name="SchedulerCountInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCountInput"></a>

```go
func SchedulerCountInput() *f64
```

- *Type:* *f64

---

##### `AirflowConfigOverrides`<sup>Required</sup> <a name="AirflowConfigOverrides" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverrides"></a>

```go
func AirflowConfigOverrides() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EnvVariables`<sup>Required</sup> <a name="EnvVariables" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariables"></a>

```go
func EnvVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageVersion`<sup>Required</sup> <a name="ImageVersion" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersion"></a>

```go
func ImageVersion() *string
```

- *Type:* *string

---

##### `PypiPackages`<sup>Required</sup> <a name="PypiPackages" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackages"></a>

```go
func PypiPackages() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PythonVersion`<sup>Required</sup> <a name="PythonVersion" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersion"></a>

```go
func PythonVersion() *string
```

- *Type:* *string

---

##### `SchedulerCount`<sup>Required</sup> <a name="SchedulerCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCount"></a>

```go
func SchedulerCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComposerEnvironmentConfigSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a>

---


### ComposerEnvironmentConfigWebServerConfigOutputReference <a name="ComposerEnvironmentConfigWebServerConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigWebServerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComposerEnvironmentConfigWebServerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComposerEnvironmentConfigWebServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a>

---


### ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList <a name="ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get"></a>

```go
func Get(index *f64) ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference <a name="ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference <a name="ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.putAllowedIpRange">PutAllowedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resetAllowedIpRange">ResetAllowedIpRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedIpRange` <a name="PutAllowedIpRange" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.putAllowedIpRange"></a>

```go
func PutAllowedIpRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.putAllowedIpRange.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowedIpRange` <a name="ResetAllowedIpRange" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resetAllowedIpRange"></a>

```go
func ResetAllowedIpRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRange">AllowedIpRange</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRangeInput">AllowedIpRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedIpRange`<sup>Required</sup> <a name="AllowedIpRange" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRange"></a>

```go
func AllowedIpRange() ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList</a>

---

##### `AllowedIpRangeInput`<sup>Optional</sup> <a name="AllowedIpRangeInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRangeInput"></a>

```go
func AllowedIpRangeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.internalValue"></a>

```go
func InternalValue() ComposerEnvironmentConfigWebServerNetworkAccessControl
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a>

---


### ComposerEnvironmentConfigWorkloadsConfigOutputReference <a name="ComposerEnvironmentConfigWorkloadsConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigWorkloadsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComposerEnvironmentConfigWorkloadsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler">PutScheduler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWebServer">PutWebServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker">PutWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetScheduler">ResetScheduler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWebServer">ResetWebServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWorker">ResetWorker</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScheduler` <a name="PutScheduler" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler"></a>

```go
func PutScheduler(value ComposerEnvironmentConfigWorkloadsConfigScheduler)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a>

---

##### `PutWebServer` <a name="PutWebServer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWebServer"></a>

```go
func PutWebServer(value ComposerEnvironmentConfigWorkloadsConfigWebServer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWebServer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a>

---

##### `PutWorker` <a name="PutWorker" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker"></a>

```go
func PutWorker(value ComposerEnvironmentConfigWorkloadsConfigWorker)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a>

---

##### `ResetScheduler` <a name="ResetScheduler" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetScheduler"></a>

```go
func ResetScheduler()
```

##### `ResetWebServer` <a name="ResetWebServer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWebServer"></a>

```go
func ResetWebServer()
```

##### `ResetWorker` <a name="ResetWorker" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWorker"></a>

```go
func ResetWorker()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.scheduler">Scheduler</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference">ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServer">WebServer</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference">ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.worker">Worker</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference">ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.schedulerInput">SchedulerInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServerInput">WebServerInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.workerInput">WorkerInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Scheduler`<sup>Required</sup> <a name="Scheduler" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.scheduler"></a>

```go
func Scheduler() ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference">ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference</a>

---

##### `WebServer`<sup>Required</sup> <a name="WebServer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServer"></a>

```go
func WebServer() ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference">ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference</a>

---

##### `Worker`<sup>Required</sup> <a name="Worker" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.worker"></a>

```go
func Worker() ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference">ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference</a>

---

##### `SchedulerInput`<sup>Optional</sup> <a name="SchedulerInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.schedulerInput"></a>

```go
func SchedulerInput() ComposerEnvironmentConfigWorkloadsConfigScheduler
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a>

---

##### `WebServerInput`<sup>Optional</sup> <a name="WebServerInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServerInput"></a>

```go
func WebServerInput() ComposerEnvironmentConfigWorkloadsConfigWebServer
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a>

---

##### `WorkerInput`<sup>Optional</sup> <a name="WorkerInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.workerInput"></a>

```go
func WorkerInput() ComposerEnvironmentConfigWorkloadsConfigWorker
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComposerEnvironmentConfigWorkloadsConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a>

---


### ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference <a name="ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetMemoryGb">ResetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetStorageGb">ResetStorageGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCount"></a>

```go
func ResetCount()
```

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetMemoryGb` <a name="ResetMemoryGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetMemoryGb"></a>

```go
func ResetMemoryGb()
```

##### `ResetStorageGb` <a name="ResetStorageGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetStorageGb"></a>

```go
func ResetStorageGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpuInput">CpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGbInput">MemoryGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGbInput">StorageGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGb">StorageGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpuInput"></a>

```go
func CpuInput() *f64
```

- *Type:* *f64

---

##### `MemoryGbInput`<sup>Optional</sup> <a name="MemoryGbInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGbInput"></a>

```go
func MemoryGbInput() *f64
```

- *Type:* *f64

---

##### `StorageGbInput`<sup>Optional</sup> <a name="StorageGbInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGbInput"></a>

```go
func StorageGbInput() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGb"></a>

```go
func MemoryGb() *f64
```

- *Type:* *f64

---

##### `StorageGb`<sup>Required</sup> <a name="StorageGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGb"></a>

```go
func StorageGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.internalValue"></a>

```go
func InternalValue() ComposerEnvironmentConfigWorkloadsConfigScheduler
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a>

---


### ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference <a name="ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetMemoryGb">ResetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetStorageGb">ResetStorageGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetMemoryGb` <a name="ResetMemoryGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetMemoryGb"></a>

```go
func ResetMemoryGb()
```

##### `ResetStorageGb` <a name="ResetStorageGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetStorageGb"></a>

```go
func ResetStorageGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpuInput">CpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGbInput">MemoryGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGbInput">StorageGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGb">StorageGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpuInput"></a>

```go
func CpuInput() *f64
```

- *Type:* *f64

---

##### `MemoryGbInput`<sup>Optional</sup> <a name="MemoryGbInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGbInput"></a>

```go
func MemoryGbInput() *f64
```

- *Type:* *f64

---

##### `StorageGbInput`<sup>Optional</sup> <a name="StorageGbInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGbInput"></a>

```go
func StorageGbInput() *f64
```

- *Type:* *f64

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGb"></a>

```go
func MemoryGb() *f64
```

- *Type:* *f64

---

##### `StorageGb`<sup>Required</sup> <a name="StorageGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGb"></a>

```go
func StorageGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.internalValue"></a>

```go
func InternalValue() ComposerEnvironmentConfigWorkloadsConfigWebServer
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a>

---


### ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference <a name="ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMaxCount">ResetMaxCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMemoryGb">ResetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMinCount">ResetMinCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetStorageGb">ResetStorageGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetMaxCount` <a name="ResetMaxCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMaxCount"></a>

```go
func ResetMaxCount()
```

##### `ResetMemoryGb` <a name="ResetMemoryGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMemoryGb"></a>

```go
func ResetMemoryGb()
```

##### `ResetMinCount` <a name="ResetMinCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMinCount"></a>

```go
func ResetMinCount()
```

##### `ResetStorageGb` <a name="ResetStorageGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetStorageGb"></a>

```go
func ResetStorageGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpuInput">CpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCountInput">MaxCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGbInput">MemoryGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCountInput">MinCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGbInput">StorageGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCount">MaxCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCount">MinCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGb">StorageGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpuInput"></a>

```go
func CpuInput() *f64
```

- *Type:* *f64

---

##### `MaxCountInput`<sup>Optional</sup> <a name="MaxCountInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCountInput"></a>

```go
func MaxCountInput() *f64
```

- *Type:* *f64

---

##### `MemoryGbInput`<sup>Optional</sup> <a name="MemoryGbInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGbInput"></a>

```go
func MemoryGbInput() *f64
```

- *Type:* *f64

---

##### `MinCountInput`<sup>Optional</sup> <a name="MinCountInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCountInput"></a>

```go
func MinCountInput() *f64
```

- *Type:* *f64

---

##### `StorageGbInput`<sup>Optional</sup> <a name="StorageGbInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGbInput"></a>

```go
func StorageGbInput() *f64
```

- *Type:* *f64

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `MaxCount`<sup>Required</sup> <a name="MaxCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCount"></a>

```go
func MaxCount() *f64
```

- *Type:* *f64

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGb"></a>

```go
func MemoryGb() *f64
```

- *Type:* *f64

---

##### `MinCount`<sup>Required</sup> <a name="MinCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCount"></a>

```go
func MinCount() *f64
```

- *Type:* *f64

---

##### `StorageGb`<sup>Required</sup> <a name="StorageGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGb"></a>

```go
func StorageGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.internalValue"></a>

```go
func InternalValue() ComposerEnvironmentConfigWorkloadsConfigWorker
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a>

---


### ComposerEnvironmentTimeoutsOutputReference <a name="ComposerEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/composerenvironment"

composerenvironment.NewComposerEnvironmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComposerEnvironmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



