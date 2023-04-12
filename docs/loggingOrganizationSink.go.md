# `loggingOrganizationSink` Submodule <a name="`loggingOrganizationSink` Submodule" id="@cdktf/provider-google.loggingOrganizationSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingOrganizationSink <a name="LoggingOrganizationSink" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/logging_organization_sink google_logging_organization_sink}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingorganizationsink"

loggingorganizationsink.NewLoggingOrganizationSink(scope Construct, id *string, config LoggingOrganizationSinkConfig) LoggingOrganizationSink
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig">LoggingOrganizationSinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig">LoggingOrganizationSinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.putBigqueryOptions">PutBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.putExclusions">PutExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetBigqueryOptions">ResetBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetIncludeChildren">ResetIncludeChildren</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBigqueryOptions` <a name="PutBigqueryOptions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.putBigqueryOptions"></a>

```go
func PutBigqueryOptions(value LoggingOrganizationSinkBigqueryOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.putBigqueryOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a>

---

##### `PutExclusions` <a name="PutExclusions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.putExclusions"></a>

```go
func PutExclusions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.putExclusions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBigqueryOptions` <a name="ResetBigqueryOptions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetBigqueryOptions"></a>

```go
func ResetBigqueryOptions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetExclusions"></a>

```go
func ResetExclusions()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeChildren` <a name="ResetIncludeChildren" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetIncludeChildren"></a>

```go
func ResetIncludeChildren()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingorganizationsink"

loggingorganizationsink.LoggingOrganizationSink_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingorganizationsink"

loggingorganizationsink.LoggingOrganizationSink_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingorganizationsink"

loggingorganizationsink.LoggingOrganizationSink_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.bigqueryOptions">BigqueryOptions</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference">LoggingOrganizationSinkBigqueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.exclusions">Exclusions</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList">LoggingOrganizationSinkExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.writerIdentity">WriterIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.bigqueryOptionsInput">BigqueryOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.exclusionsInput">ExclusionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.includeChildrenInput">IncludeChildrenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.includeChildren">IncludeChildren</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BigqueryOptions`<sup>Required</sup> <a name="BigqueryOptions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.bigqueryOptions"></a>

```go
func BigqueryOptions() LoggingOrganizationSinkBigqueryOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference">LoggingOrganizationSinkBigqueryOptionsOutputReference</a>

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.exclusions"></a>

```go
func Exclusions() LoggingOrganizationSinkExclusionsList
```

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList">LoggingOrganizationSinkExclusionsList</a>

---

##### `WriterIdentity`<sup>Required</sup> <a name="WriterIdentity" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.writerIdentity"></a>

```go
func WriterIdentity() *string
```

- *Type:* *string

---

##### `BigqueryOptionsInput`<sup>Optional</sup> <a name="BigqueryOptionsInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.bigqueryOptionsInput"></a>

```go
func BigqueryOptionsInput() LoggingOrganizationSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.exclusionsInput"></a>

```go
func ExclusionsInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeChildrenInput`<sup>Optional</sup> <a name="IncludeChildrenInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.includeChildrenInput"></a>

```go
func IncludeChildrenInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeChildren`<sup>Required</sup> <a name="IncludeChildren" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.includeChildren"></a>

```go
func IncludeChildren() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingOrganizationSinkBigqueryOptions <a name="LoggingOrganizationSinkBigqueryOptions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingorganizationsink"

&loggingorganizationsink.LoggingOrganizationSinkBigqueryOptions {
	UsePartitionedTables: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions.property.usePartitionedTables">UsePartitionedTables</a></code> | <code>interface{}</code> | Whether to use BigQuery's partition tables. |

---

##### `UsePartitionedTables`<sup>Required</sup> <a name="UsePartitionedTables" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions.property.usePartitionedTables"></a>

```go
UsePartitionedTables interface{}
```

- *Type:* interface{}

Whether to use BigQuery's partition tables.

By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_sink#use_partitioned_tables LoggingOrganizationSink#use_partitioned_tables}

---

### LoggingOrganizationSinkConfig <a name="LoggingOrganizationSinkConfig" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingorganizationsink"

&loggingorganizationsink.LoggingOrganizationSinkConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Destination: *string,
	Name: *string,
	OrgId: *string,
	BigqueryOptions: github.com/cdktf/cdktf-provider-google-go/google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions,
	Description: *string,
	Disabled: interface{},
	Exclusions: interface{},
	Filter: *string,
	Id: *string,
	IncludeChildren: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.destination">Destination</a></code> | <code>*string</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.name">Name</a></code> | <code>*string</code> | The name of the logging sink. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.orgId">OrgId</a></code> | <code>*string</code> | The numeric ID of the organization to be exported to the sink. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.bigqueryOptions">BigqueryOptions</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.description">Description</a></code> | <code>*string</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.exclusions">Exclusions</a></code> | <code>interface{}</code> | exclusions block. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.filter">Filter</a></code> | <code>*string</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_sink#id LoggingOrganizationSink#id}. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.includeChildren">IncludeChildren</a></code> | <code>interface{}</code> | Whether or not to include children organizations in the sink export. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_sink#destination LoggingOrganizationSink#destination}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the logging sink.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_sink#name LoggingOrganizationSink#name}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

The numeric ID of the organization to be exported to the sink.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_sink#org_id LoggingOrganizationSink#org_id}

---

##### `BigqueryOptions`<sup>Optional</sup> <a name="BigqueryOptions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.bigqueryOptions"></a>

```go
BigqueryOptions LoggingOrganizationSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_sink#bigquery_options LoggingOrganizationSink#bigquery_options}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_sink#description LoggingOrganizationSink#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_sink#disabled LoggingOrganizationSink#disabled}

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.exclusions"></a>

```go
Exclusions interface{}
```

- *Type:* interface{}

exclusions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_sink#exclusions LoggingOrganizationSink#exclusions}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_sink#filter LoggingOrganizationSink#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_sink#id LoggingOrganizationSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeChildren`<sup>Optional</sup> <a name="IncludeChildren" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.includeChildren"></a>

```go
IncludeChildren interface{}
```

- *Type:* interface{}

Whether or not to include children organizations in the sink export.

If true, logs associated with child projects are also exported; otherwise only logs relating to the provided organization are included.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_sink#include_children LoggingOrganizationSink#include_children}

---

### LoggingOrganizationSinkExclusions <a name="LoggingOrganizationSinkExclusions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingorganizationsink"

&loggingorganizationsink.LoggingOrganizationSinkExclusions {
	Filter: *string,
	Name: *string,
	Description: *string,
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.filter">Filter</a></code> | <code>*string</code> | An advanced logs filter that matches the log entries to be excluded. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.name">Name</a></code> | <code>*string</code> | A client-assigned identifier, such as "load-balancer-exclusion". |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.description">Description</a></code> | <code>*string</code> | A description of this exclusion. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.disabled">Disabled</a></code> | <code>interface{}</code> | If set to True, then this exclusion is disabled and it does not exclude any log entries. |

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

An advanced logs filter that matches the log entries to be excluded.

By using the sample function, you can exclude less than 100% of the matching log entries

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_sink#filter LoggingOrganizationSink#filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.name"></a>

```go
Name *string
```

- *Type:* *string

A client-assigned identifier, such as "load-balancer-exclusion".

Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_sink#name LoggingOrganizationSink#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of this exclusion.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_sink#description LoggingOrganizationSink#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

If set to True, then this exclusion is disabled and it does not exclude any log entries.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_sink#disabled LoggingOrganizationSink#disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingOrganizationSinkBigqueryOptionsOutputReference <a name="LoggingOrganizationSinkBigqueryOptionsOutputReference" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingorganizationsink"

loggingorganizationsink.NewLoggingOrganizationSinkBigqueryOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoggingOrganizationSinkBigqueryOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput">UsePartitionedTablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTables">UsePartitionedTables</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UsePartitionedTablesInput`<sup>Optional</sup> <a name="UsePartitionedTablesInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput"></a>

```go
func UsePartitionedTablesInput() interface{}
```

- *Type:* interface{}

---

##### `UsePartitionedTables`<sup>Required</sup> <a name="UsePartitionedTables" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTables"></a>

```go
func UsePartitionedTables() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() LoggingOrganizationSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a>

---


### LoggingOrganizationSinkExclusionsList <a name="LoggingOrganizationSinkExclusionsList" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingorganizationsink"

loggingorganizationsink.NewLoggingOrganizationSinkExclusionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LoggingOrganizationSinkExclusionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.get"></a>

```go
func Get(index *f64) LoggingOrganizationSinkExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoggingOrganizationSinkExclusionsOutputReference <a name="LoggingOrganizationSinkExclusionsOutputReference" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingorganizationsink"

loggingorganizationsink.NewLoggingOrganizationSinkExclusionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LoggingOrganizationSinkExclusionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



