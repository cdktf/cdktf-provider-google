# `loggingProjectSink` Submodule <a name="`loggingProjectSink` Submodule" id="@cdktf/provider-google.loggingProjectSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingProjectSink <a name="LoggingProjectSink" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink google_logging_project_sink}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingprojectsink"

loggingprojectsink.NewLoggingProjectSink(scope Construct, id *string, config LoggingProjectSinkConfig) LoggingProjectSink
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig">LoggingProjectSinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig">LoggingProjectSinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.putBigqueryOptions">PutBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.putExclusions">PutExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetBigqueryOptions">ResetBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetUniqueWriterIdentity">ResetUniqueWriterIdentity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBigqueryOptions` <a name="PutBigqueryOptions" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.putBigqueryOptions"></a>

```go
func PutBigqueryOptions(value LoggingProjectSinkBigqueryOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.putBigqueryOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions">LoggingProjectSinkBigqueryOptions</a>

---

##### `PutExclusions` <a name="PutExclusions" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.putExclusions"></a>

```go
func PutExclusions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.putExclusions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBigqueryOptions` <a name="ResetBigqueryOptions" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetBigqueryOptions"></a>

```go
func ResetBigqueryOptions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetExclusions"></a>

```go
func ResetExclusions()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetProject"></a>

```go
func ResetProject()
```

##### `ResetUniqueWriterIdentity` <a name="ResetUniqueWriterIdentity" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetUniqueWriterIdentity"></a>

```go
func ResetUniqueWriterIdentity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingprojectsink"

loggingprojectsink.LoggingProjectSink_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingprojectsink"

loggingprojectsink.LoggingProjectSink_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingprojectsink"

loggingprojectsink.LoggingProjectSink_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.bigqueryOptions">BigqueryOptions</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference">LoggingProjectSinkBigqueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.exclusions">Exclusions</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList">LoggingProjectSinkExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.writerIdentity">WriterIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.bigqueryOptionsInput">BigqueryOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions">LoggingProjectSinkBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.exclusionsInput">ExclusionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.uniqueWriterIdentityInput">UniqueWriterIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.uniqueWriterIdentity">UniqueWriterIdentity</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BigqueryOptions`<sup>Required</sup> <a name="BigqueryOptions" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.bigqueryOptions"></a>

```go
func BigqueryOptions() LoggingProjectSinkBigqueryOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference">LoggingProjectSinkBigqueryOptionsOutputReference</a>

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.exclusions"></a>

```go
func Exclusions() LoggingProjectSinkExclusionsList
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList">LoggingProjectSinkExclusionsList</a>

---

##### `WriterIdentity`<sup>Required</sup> <a name="WriterIdentity" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.writerIdentity"></a>

```go
func WriterIdentity() *string
```

- *Type:* *string

---

##### `BigqueryOptionsInput`<sup>Optional</sup> <a name="BigqueryOptionsInput" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.bigqueryOptionsInput"></a>

```go
func BigqueryOptionsInput() LoggingProjectSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions">LoggingProjectSinkBigqueryOptions</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.exclusionsInput"></a>

```go
func ExclusionsInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `UniqueWriterIdentityInput`<sup>Optional</sup> <a name="UniqueWriterIdentityInput" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.uniqueWriterIdentityInput"></a>

```go
func UniqueWriterIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `UniqueWriterIdentity`<sup>Required</sup> <a name="UniqueWriterIdentity" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.uniqueWriterIdentity"></a>

```go
func UniqueWriterIdentity() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingProjectSinkBigqueryOptions <a name="LoggingProjectSinkBigqueryOptions" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingprojectsink"

&loggingprojectsink.LoggingProjectSinkBigqueryOptions {
	UsePartitionedTables: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions.property.usePartitionedTables">UsePartitionedTables</a></code> | <code>interface{}</code> | Whether to use BigQuery's partition tables. |

---

##### `UsePartitionedTables`<sup>Required</sup> <a name="UsePartitionedTables" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions.property.usePartitionedTables"></a>

```go
UsePartitionedTables interface{}
```

- *Type:* interface{}

Whether to use BigQuery's partition tables.

By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink#use_partitioned_tables LoggingProjectSink#use_partitioned_tables}

---

### LoggingProjectSinkConfig <a name="LoggingProjectSinkConfig" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingprojectsink"

&loggingprojectsink.LoggingProjectSinkConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Destination: *string,
	Name: *string,
	BigqueryOptions: github.com/cdktf/cdktf-provider-google-go/google.loggingProjectSink.LoggingProjectSinkBigqueryOptions,
	Description: *string,
	Disabled: interface{},
	Exclusions: interface{},
	Filter: *string,
	Id: *string,
	Project: *string,
	UniqueWriterIdentity: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.destination">Destination</a></code> | <code>*string</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.name">Name</a></code> | <code>*string</code> | The name of the logging sink. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.bigqueryOptions">BigqueryOptions</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions">LoggingProjectSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.description">Description</a></code> | <code>*string</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.exclusions">Exclusions</a></code> | <code>interface{}</code> | exclusions block. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.filter">Filter</a></code> | <code>*string</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink#id LoggingProjectSink#id}. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project to create the sink in. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.uniqueWriterIdentity">UniqueWriterIdentity</a></code> | <code>interface{}</code> | Whether or not to create a unique identity associated with this sink. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink#destination LoggingProjectSink#destination}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the logging sink.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink#name LoggingProjectSink#name}

---

##### `BigqueryOptions`<sup>Optional</sup> <a name="BigqueryOptions" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.bigqueryOptions"></a>

```go
BigqueryOptions LoggingProjectSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions">LoggingProjectSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink#bigquery_options LoggingProjectSink#bigquery_options}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink#description LoggingProjectSink#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink#disabled LoggingProjectSink#disabled}

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.exclusions"></a>

```go
Exclusions interface{}
```

- *Type:* interface{}

exclusions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink#exclusions LoggingProjectSink#exclusions}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink#filter LoggingProjectSink#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink#id LoggingProjectSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project to create the sink in.

If omitted, the project associated with the provider is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink#project LoggingProjectSink#project}

---

##### `UniqueWriterIdentity`<sup>Optional</sup> <a name="UniqueWriterIdentity" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.uniqueWriterIdentity"></a>

```go
UniqueWriterIdentity interface{}
```

- *Type:* interface{}

Whether or not to create a unique identity associated with this sink.

If false (the default), then the writer_identity used is serviceAccount:cloud-logs@system.gserviceaccount.com. If true, then a unique service account is created and used for this sink. If you wish to publish logs across projects, you must set unique_writer_identity to true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink#unique_writer_identity LoggingProjectSink#unique_writer_identity}

---

### LoggingProjectSinkExclusions <a name="LoggingProjectSinkExclusions" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingprojectsink"

&loggingprojectsink.LoggingProjectSinkExclusions {
	Filter: *string,
	Name: *string,
	Description: *string,
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions.property.filter">Filter</a></code> | <code>*string</code> | An advanced logs filter that matches the log entries to be excluded. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions.property.name">Name</a></code> | <code>*string</code> | A client-assigned identifier, such as "load-balancer-exclusion". |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions.property.description">Description</a></code> | <code>*string</code> | A description of this exclusion. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions.property.disabled">Disabled</a></code> | <code>interface{}</code> | If set to True, then this exclusion is disabled and it does not exclude any log entries. |

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

An advanced logs filter that matches the log entries to be excluded.

By using the sample function, you can exclude less than 100% of the matching log entries

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink#filter LoggingProjectSink#filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions.property.name"></a>

```go
Name *string
```

- *Type:* *string

A client-assigned identifier, such as "load-balancer-exclusion".

Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink#name LoggingProjectSink#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of this exclusion.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink#description LoggingProjectSink#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

If set to True, then this exclusion is disabled and it does not exclude any log entries.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink#disabled LoggingProjectSink#disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingProjectSinkBigqueryOptionsOutputReference <a name="LoggingProjectSinkBigqueryOptionsOutputReference" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingprojectsink"

loggingprojectsink.NewLoggingProjectSinkBigqueryOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoggingProjectSinkBigqueryOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput">UsePartitionedTablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.property.usePartitionedTables">UsePartitionedTables</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions">LoggingProjectSinkBigqueryOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UsePartitionedTablesInput`<sup>Optional</sup> <a name="UsePartitionedTablesInput" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput"></a>

```go
func UsePartitionedTablesInput() interface{}
```

- *Type:* interface{}

---

##### `UsePartitionedTables`<sup>Required</sup> <a name="UsePartitionedTables" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.property.usePartitionedTables"></a>

```go
func UsePartitionedTables() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() LoggingProjectSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions">LoggingProjectSinkBigqueryOptions</a>

---


### LoggingProjectSinkExclusionsList <a name="LoggingProjectSinkExclusionsList" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingprojectsink"

loggingprojectsink.NewLoggingProjectSinkExclusionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LoggingProjectSinkExclusionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.get"></a>

```go
func Get(index *f64) LoggingProjectSinkExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoggingProjectSinkExclusionsOutputReference <a name="LoggingProjectSinkExclusionsOutputReference" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingprojectsink"

loggingprojectsink.NewLoggingProjectSinkExclusionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LoggingProjectSinkExclusionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



