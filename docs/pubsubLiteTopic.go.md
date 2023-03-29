# `pubsubLiteTopic` Submodule <a name="`pubsubLiteTopic` Submodule" id="@cdktf/provider-google.pubsubLiteTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PubsubLiteTopic <a name="PubsubLiteTopic" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic google_pubsub_lite_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/pubsublitetopic"

pubsublitetopic.NewPubsubLiteTopic(scope Construct, id *string, config PubsubLiteTopicConfig) PubsubLiteTopic
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig">PubsubLiteTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig">PubsubLiteTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putPartitionConfig">PutPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putReservationConfig">PutReservationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putRetentionConfig">PutRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetPartitionConfig">ResetPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetReservationConfig">ResetReservationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetRetentionConfig">ResetRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPartitionConfig` <a name="PutPartitionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putPartitionConfig"></a>

```go
func PutPartitionConfig(value PubsubLiteTopicPartitionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putPartitionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a>

---

##### `PutReservationConfig` <a name="PutReservationConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putReservationConfig"></a>

```go
func PutReservationConfig(value PubsubLiteTopicReservationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putReservationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a>

---

##### `PutRetentionConfig` <a name="PutRetentionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putRetentionConfig"></a>

```go
func PutRetentionConfig(value PubsubLiteTopicRetentionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putRetentionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putTimeouts"></a>

```go
func PutTimeouts(value PubsubLiteTopicTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts">PubsubLiteTopicTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetId"></a>

```go
func ResetId()
```

##### `ResetPartitionConfig` <a name="ResetPartitionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetPartitionConfig"></a>

```go
func ResetPartitionConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetReservationConfig` <a name="ResetReservationConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetReservationConfig"></a>

```go
func ResetReservationConfig()
```

##### `ResetRetentionConfig` <a name="ResetRetentionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetRetentionConfig"></a>

```go
func ResetRetentionConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/pubsublitetopic"

pubsublitetopic.PubsubLiteTopic_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/pubsublitetopic"

pubsublitetopic.PubsubLiteTopic_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/pubsublitetopic"

pubsublitetopic.PubsubLiteTopic_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.partitionConfig">PartitionConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference">PubsubLiteTopicPartitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.reservationConfig">ReservationConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference">PubsubLiteTopicReservationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.retentionConfig">RetentionConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference">PubsubLiteTopicRetentionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference">PubsubLiteTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.partitionConfigInput">PartitionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.reservationConfigInput">ReservationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.retentionConfigInput">RetentionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PartitionConfig`<sup>Required</sup> <a name="PartitionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.partitionConfig"></a>

```go
func PartitionConfig() PubsubLiteTopicPartitionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference">PubsubLiteTopicPartitionConfigOutputReference</a>

---

##### `ReservationConfig`<sup>Required</sup> <a name="ReservationConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.reservationConfig"></a>

```go
func ReservationConfig() PubsubLiteTopicReservationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference">PubsubLiteTopicReservationConfigOutputReference</a>

---

##### `RetentionConfig`<sup>Required</sup> <a name="RetentionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.retentionConfig"></a>

```go
func RetentionConfig() PubsubLiteTopicRetentionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference">PubsubLiteTopicRetentionConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.timeouts"></a>

```go
func Timeouts() PubsubLiteTopicTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference">PubsubLiteTopicTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PartitionConfigInput`<sup>Optional</sup> <a name="PartitionConfigInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.partitionConfigInput"></a>

```go
func PartitionConfigInput() PubsubLiteTopicPartitionConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ReservationConfigInput`<sup>Optional</sup> <a name="ReservationConfigInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.reservationConfigInput"></a>

```go
func ReservationConfigInput() PubsubLiteTopicReservationConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a>

---

##### `RetentionConfigInput`<sup>Optional</sup> <a name="RetentionConfigInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.retentionConfigInput"></a>

```go
func RetentionConfigInput() PubsubLiteTopicRetentionConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PubsubLiteTopicConfig <a name="PubsubLiteTopicConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/pubsublitetopic"

&pubsublitetopic.PubsubLiteTopicConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	PartitionConfig: github.com/cdktf/cdktf-provider-google-go/google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig,
	Project: *string,
	Region: *string,
	ReservationConfig: github.com/cdktf/cdktf-provider-google-go/google.pubsubLiteTopic.PubsubLiteTopicReservationConfig,
	RetentionConfig: github.com/cdktf/cdktf-provider-google-go/google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.pubsubLiteTopic.PubsubLiteTopicTimeouts,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.name">Name</a></code> | <code>*string</code> | Name of the topic. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#id PubsubLiteTopic#id}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.partitionConfig">PartitionConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a></code> | partition_config block. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#project PubsubLiteTopic#project}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.region">Region</a></code> | <code>*string</code> | The region of the pubsub lite topic. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.reservationConfig">ReservationConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a></code> | reservation_config block. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.retentionConfig">RetentionConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a></code> | retention_config block. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts">PubsubLiteTopicTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.zone">Zone</a></code> | <code>*string</code> | The zone of the pubsub lite topic. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the topic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#name PubsubLiteTopic#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#id PubsubLiteTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PartitionConfig`<sup>Optional</sup> <a name="PartitionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.partitionConfig"></a>

```go
PartitionConfig PubsubLiteTopicPartitionConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a>

partition_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#partition_config PubsubLiteTopic#partition_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#project PubsubLiteTopic#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the pubsub lite topic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#region PubsubLiteTopic#region}

---

##### `ReservationConfig`<sup>Optional</sup> <a name="ReservationConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.reservationConfig"></a>

```go
ReservationConfig PubsubLiteTopicReservationConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a>

reservation_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#reservation_config PubsubLiteTopic#reservation_config}

---

##### `RetentionConfig`<sup>Optional</sup> <a name="RetentionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.retentionConfig"></a>

```go
RetentionConfig PubsubLiteTopicRetentionConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a>

retention_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#retention_config PubsubLiteTopic#retention_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.timeouts"></a>

```go
Timeouts PubsubLiteTopicTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts">PubsubLiteTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#timeouts PubsubLiteTopic#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The zone of the pubsub lite topic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#zone PubsubLiteTopic#zone}

---

### PubsubLiteTopicPartitionConfig <a name="PubsubLiteTopicPartitionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/pubsublitetopic"

&pubsublitetopic.PubsubLiteTopicPartitionConfig {
	Count: *f64,
	Capacity: github.com/cdktf/cdktf-provider-google-go/google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig.property.count">Count</a></code> | <code>*f64</code> | The number of partitions in the topic. Must be at least 1. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig.property.capacity">Capacity</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a></code> | capacity block. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

The number of partitions in the topic. Must be at least 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#count PubsubLiteTopic#count}

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig.property.capacity"></a>

```go
Capacity PubsubLiteTopicPartitionConfigCapacity
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#capacity PubsubLiteTopic#capacity}

---

### PubsubLiteTopicPartitionConfigCapacity <a name="PubsubLiteTopicPartitionConfigCapacity" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/pubsublitetopic"

&pubsublitetopic.PubsubLiteTopicPartitionConfigCapacity {
	PublishMibPerSec: *f64,
	SubscribeMibPerSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity.property.publishMibPerSec">PublishMibPerSec</a></code> | <code>*f64</code> | Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity.property.subscribeMibPerSec">SubscribeMibPerSec</a></code> | <code>*f64</code> | Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16. |

---

##### `PublishMibPerSec`<sup>Required</sup> <a name="PublishMibPerSec" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity.property.publishMibPerSec"></a>

```go
PublishMibPerSec *f64
```

- *Type:* *f64

Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#publish_mib_per_sec PubsubLiteTopic#publish_mib_per_sec}

---

##### `SubscribeMibPerSec`<sup>Required</sup> <a name="SubscribeMibPerSec" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity.property.subscribeMibPerSec"></a>

```go
SubscribeMibPerSec *f64
```

- *Type:* *f64

Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#subscribe_mib_per_sec PubsubLiteTopic#subscribe_mib_per_sec}

---

### PubsubLiteTopicReservationConfig <a name="PubsubLiteTopicReservationConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/pubsublitetopic"

&pubsublitetopic.PubsubLiteTopicReservationConfig {
	ThroughputReservation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig.property.throughputReservation">ThroughputReservation</a></code> | <code>*string</code> | The Reservation to use for this topic's throughput capacity. |

---

##### `ThroughputReservation`<sup>Optional</sup> <a name="ThroughputReservation" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig.property.throughputReservation"></a>

```go
ThroughputReservation *string
```

- *Type:* *string

The Reservation to use for this topic's throughput capacity.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#throughput_reservation PubsubLiteTopic#throughput_reservation}

---

### PubsubLiteTopicRetentionConfig <a name="PubsubLiteTopicRetentionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/pubsublitetopic"

&pubsublitetopic.PubsubLiteTopicRetentionConfig {
	PerPartitionBytes: *string,
	Period: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig.property.perPartitionBytes">PerPartitionBytes</a></code> | <code>*string</code> | The provisioned storage, in bytes, per partition. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig.property.period">Period</a></code> | <code>*string</code> | How long a published message is retained. |

---

##### `PerPartitionBytes`<sup>Required</sup> <a name="PerPartitionBytes" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig.property.perPartitionBytes"></a>

```go
PerPartitionBytes *string
```

- *Type:* *string

The provisioned storage, in bytes, per partition.

If the number of bytes stored
in any of the topic's partitions grows beyond this value, older messages will be
dropped to make room for newer ones, regardless of the value of period.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#per_partition_bytes PubsubLiteTopic#per_partition_bytes}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig.property.period"></a>

```go
Period *string
```

- *Type:* *string

How long a published message is retained.

If unset, messages will be retained as
long as the bytes retained for each partition is below perPartitionBytes. A
duration in seconds with up to nine fractional digits, terminated by 's'.
Example: "3.5s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#period PubsubLiteTopic#period}

---

### PubsubLiteTopicTimeouts <a name="PubsubLiteTopicTimeouts" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/pubsublitetopic"

&pubsublitetopic.PubsubLiteTopicTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#create PubsubLiteTopic#create}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#delete PubsubLiteTopic#delete}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#update PubsubLiteTopic#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#create PubsubLiteTopic#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#delete PubsubLiteTopic#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic#update PubsubLiteTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PubsubLiteTopicPartitionConfigCapacityOutputReference <a name="PubsubLiteTopicPartitionConfigCapacityOutputReference" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/pubsublitetopic"

pubsublitetopic.NewPubsubLiteTopicPartitionConfigCapacityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PubsubLiteTopicPartitionConfigCapacityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSecInput">PublishMibPerSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSecInput">SubscribeMibPerSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSec">PublishMibPerSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSec">SubscribeMibPerSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublishMibPerSecInput`<sup>Optional</sup> <a name="PublishMibPerSecInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSecInput"></a>

```go
func PublishMibPerSecInput() *f64
```

- *Type:* *f64

---

##### `SubscribeMibPerSecInput`<sup>Optional</sup> <a name="SubscribeMibPerSecInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSecInput"></a>

```go
func SubscribeMibPerSecInput() *f64
```

- *Type:* *f64

---

##### `PublishMibPerSec`<sup>Required</sup> <a name="PublishMibPerSec" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSec"></a>

```go
func PublishMibPerSec() *f64
```

- *Type:* *f64

---

##### `SubscribeMibPerSec`<sup>Required</sup> <a name="SubscribeMibPerSec" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSec"></a>

```go
func SubscribeMibPerSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.internalValue"></a>

```go
func InternalValue() PubsubLiteTopicPartitionConfigCapacity
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a>

---


### PubsubLiteTopicPartitionConfigOutputReference <a name="PubsubLiteTopicPartitionConfigOutputReference" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/pubsublitetopic"

pubsublitetopic.NewPubsubLiteTopicPartitionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PubsubLiteTopicPartitionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.putCapacity">PutCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.resetCapacity">ResetCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacity` <a name="PutCapacity" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.putCapacity"></a>

```go
func PutCapacity(value PubsubLiteTopicPartitionConfigCapacity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a>

---

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.resetCapacity"></a>

```go
func ResetCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.capacity">Capacity</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference">PubsubLiteTopicPartitionConfigCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.capacityInput">CapacityInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.capacity"></a>

```go
func Capacity() PubsubLiteTopicPartitionConfigCapacityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference">PubsubLiteTopicPartitionConfigCapacityOutputReference</a>

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.capacityInput"></a>

```go
func CapacityInput() PubsubLiteTopicPartitionConfigCapacity
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a>

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() PubsubLiteTopicPartitionConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a>

---


### PubsubLiteTopicReservationConfigOutputReference <a name="PubsubLiteTopicReservationConfigOutputReference" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/pubsublitetopic"

pubsublitetopic.NewPubsubLiteTopicReservationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PubsubLiteTopicReservationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.resetThroughputReservation">ResetThroughputReservation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetThroughputReservation` <a name="ResetThroughputReservation" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.resetThroughputReservation"></a>

```go
func ResetThroughputReservation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.throughputReservationInput">ThroughputReservationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.throughputReservation">ThroughputReservation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ThroughputReservationInput`<sup>Optional</sup> <a name="ThroughputReservationInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.throughputReservationInput"></a>

```go
func ThroughputReservationInput() *string
```

- *Type:* *string

---

##### `ThroughputReservation`<sup>Required</sup> <a name="ThroughputReservation" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.throughputReservation"></a>

```go
func ThroughputReservation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() PubsubLiteTopicReservationConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a>

---


### PubsubLiteTopicRetentionConfigOutputReference <a name="PubsubLiteTopicRetentionConfigOutputReference" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/pubsublitetopic"

pubsublitetopic.NewPubsubLiteTopicRetentionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PubsubLiteTopicRetentionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.resetPeriod"></a>

```go
func ResetPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.periodInput">PeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytesInput">PerPartitionBytesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.period">Period</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytes">PerPartitionBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.periodInput"></a>

```go
func PeriodInput() *string
```

- *Type:* *string

---

##### `PerPartitionBytesInput`<sup>Optional</sup> <a name="PerPartitionBytesInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytesInput"></a>

```go
func PerPartitionBytesInput() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.period"></a>

```go
func Period() *string
```

- *Type:* *string

---

##### `PerPartitionBytes`<sup>Required</sup> <a name="PerPartitionBytes" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytes"></a>

```go
func PerPartitionBytes() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() PubsubLiteTopicRetentionConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a>

---


### PubsubLiteTopicTimeoutsOutputReference <a name="PubsubLiteTopicTimeoutsOutputReference" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/pubsublitetopic"

pubsublitetopic.NewPubsubLiteTopicTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PubsubLiteTopicTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



