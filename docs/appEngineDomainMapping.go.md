# `appEngineDomainMapping` Submodule <a name="`appEngineDomainMapping` Submodule" id="@cdktf/provider-google.appEngineDomainMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineDomainMapping <a name="AppEngineDomainMapping" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping google_app_engine_domain_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginedomainmapping"

appenginedomainmapping.NewAppEngineDomainMapping(scope Construct, id *string, config AppEngineDomainMappingConfig) AppEngineDomainMapping
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig">AppEngineDomainMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig">AppEngineDomainMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putSslSettings">PutSslSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetOverrideStrategy">ResetOverrideStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetSslSettings">ResetSslSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSslSettings` <a name="PutSslSettings" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putSslSettings"></a>

```go
func PutSslSettings(value AppEngineDomainMappingSslSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putSslSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putTimeouts"></a>

```go
func PutTimeouts(value AppEngineDomainMappingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetId"></a>

```go
func ResetId()
```

##### `ResetOverrideStrategy` <a name="ResetOverrideStrategy" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetOverrideStrategy"></a>

```go
func ResetOverrideStrategy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSslSettings` <a name="ResetSslSettings" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetSslSettings"></a>

```go
func ResetSslSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginedomainmapping"

appenginedomainmapping.AppEngineDomainMapping_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginedomainmapping"

appenginedomainmapping.AppEngineDomainMapping_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginedomainmapping"

appenginedomainmapping.AppEngineDomainMapping_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.resourceRecords">ResourceRecords</a></code> | <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList">AppEngineDomainMappingResourceRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.sslSettings">SslSettings</a></code> | <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference">AppEngineDomainMappingSslSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference">AppEngineDomainMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.overrideStrategyInput">OverrideStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.sslSettingsInput">SslSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.overrideStrategy">OverrideStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceRecords`<sup>Required</sup> <a name="ResourceRecords" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.resourceRecords"></a>

```go
func ResourceRecords() AppEngineDomainMappingResourceRecordsList
```

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList">AppEngineDomainMappingResourceRecordsList</a>

---

##### `SslSettings`<sup>Required</sup> <a name="SslSettings" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.sslSettings"></a>

```go
func SslSettings() AppEngineDomainMappingSslSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference">AppEngineDomainMappingSslSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.timeouts"></a>

```go
func Timeouts() AppEngineDomainMappingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference">AppEngineDomainMappingTimeoutsOutputReference</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OverrideStrategyInput`<sup>Optional</sup> <a name="OverrideStrategyInput" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.overrideStrategyInput"></a>

```go
func OverrideStrategyInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SslSettingsInput`<sup>Optional</sup> <a name="SslSettingsInput" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.sslSettingsInput"></a>

```go
func SslSettingsInput() AppEngineDomainMappingSslSettings
```

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OverrideStrategy`<sup>Required</sup> <a name="OverrideStrategy" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.overrideStrategy"></a>

```go
func OverrideStrategy() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineDomainMappingConfig <a name="AppEngineDomainMappingConfig" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginedomainmapping"

&appenginedomainmapping.AppEngineDomainMappingConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DomainName: *string,
	Id: *string,
	OverrideStrategy: *string,
	Project: *string,
	SslSettings: github.com/cdktf/cdktf-provider-google-go/google.appEngineDomainMapping.AppEngineDomainMappingSslSettings,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.appEngineDomainMapping.AppEngineDomainMappingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Relative name of the domain serving the application. Example: example.com. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#id AppEngineDomainMapping#id}. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.overrideStrategy">OverrideStrategy</a></code> | <code>*string</code> | Whether the domain creation should override any existing mappings for this domain. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#project AppEngineDomainMapping#project}. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.sslSettings">SslSettings</a></code> | <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a></code> | ssl_settings block. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Relative name of the domain serving the application. Example: example.com.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#domain_name AppEngineDomainMapping#domain_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#id AppEngineDomainMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OverrideStrategy`<sup>Optional</sup> <a name="OverrideStrategy" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.overrideStrategy"></a>

```go
OverrideStrategy *string
```

- *Type:* *string

Whether the domain creation should override any existing mappings for this domain.

By default, overrides are rejected. Default value: "STRICT" Possible values: ["STRICT", "OVERRIDE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#override_strategy AppEngineDomainMapping#override_strategy}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#project AppEngineDomainMapping#project}.

---

##### `SslSettings`<sup>Optional</sup> <a name="SslSettings" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.sslSettings"></a>

```go
SslSettings AppEngineDomainMappingSslSettings
```

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a>

ssl_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#ssl_settings AppEngineDomainMapping#ssl_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.timeouts"></a>

```go
Timeouts AppEngineDomainMappingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#timeouts AppEngineDomainMapping#timeouts}

---

### AppEngineDomainMappingResourceRecords <a name="AppEngineDomainMappingResourceRecords" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecords.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginedomainmapping"

&appenginedomainmapping.AppEngineDomainMappingResourceRecords {

}
```


### AppEngineDomainMappingSslSettings <a name="AppEngineDomainMappingSslSettings" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginedomainmapping"

&appenginedomainmapping.AppEngineDomainMappingSslSettings {
	SslManagementType: *string,
	CertificateId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings.property.sslManagementType">SslManagementType</a></code> | <code>*string</code> | SSL management type for this domain. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings.property.certificateId">CertificateId</a></code> | <code>*string</code> | ID of the AuthorizedCertificate resource configuring SSL for the application. |

---

##### `SslManagementType`<sup>Required</sup> <a name="SslManagementType" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings.property.sslManagementType"></a>

```go
SslManagementType *string
```

- *Type:* *string

SSL management type for this domain.

If 'AUTOMATIC', a managed certificate is automatically provisioned.
If 'MANUAL', 'certificateId' must be manually specified in order to configure SSL for this domain. Possible values: ["AUTOMATIC", "MANUAL"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#ssl_management_type AppEngineDomainMapping#ssl_management_type}

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings.property.certificateId"></a>

```go
CertificateId *string
```

- *Type:* *string

ID of the AuthorizedCertificate resource configuring SSL for the application.

Clearing this field will
remove SSL support.
By default, a managed certificate is automatically created for every domain mapping. To omit SSL support
or to configure SSL manually, specify 'SslManagementType.MANUAL' on a 'CREATE' or 'UPDATE' request. You must be
authorized to administer the 'AuthorizedCertificate' resource to manually map it to a DomainMapping resource.
Example: 12345.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#certificate_id AppEngineDomainMapping#certificate_id}

---

### AppEngineDomainMappingTimeouts <a name="AppEngineDomainMappingTimeouts" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginedomainmapping"

&appenginedomainmapping.AppEngineDomainMappingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#create AppEngineDomainMapping#create}. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#delete AppEngineDomainMapping#delete}. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#update AppEngineDomainMapping#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#create AppEngineDomainMapping#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#delete AppEngineDomainMapping#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#update AppEngineDomainMapping#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineDomainMappingResourceRecordsList <a name="AppEngineDomainMappingResourceRecordsList" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginedomainmapping"

appenginedomainmapping.NewAppEngineDomainMappingResourceRecordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppEngineDomainMappingResourceRecordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.get"></a>

```go
func Get(index *f64) AppEngineDomainMappingResourceRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### AppEngineDomainMappingResourceRecordsOutputReference <a name="AppEngineDomainMappingResourceRecordsOutputReference" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginedomainmapping"

appenginedomainmapping.NewAppEngineDomainMappingResourceRecordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppEngineDomainMappingResourceRecordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.rrdata">Rrdata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecords">AppEngineDomainMappingResourceRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Rrdata`<sup>Required</sup> <a name="Rrdata" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.rrdata"></a>

```go
func Rrdata() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineDomainMappingResourceRecords
```

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecords">AppEngineDomainMappingResourceRecords</a>

---


### AppEngineDomainMappingSslSettingsOutputReference <a name="AppEngineDomainMappingSslSettingsOutputReference" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginedomainmapping"

appenginedomainmapping.NewAppEngineDomainMappingSslSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineDomainMappingSslSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.resetCertificateId">ResetCertificateId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateId` <a name="ResetCertificateId" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.resetCertificateId"></a>

```go
func ResetCertificateId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.pendingManagedCertificateId">PendingManagedCertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.certificateIdInput">CertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.sslManagementTypeInput">SslManagementTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.sslManagementType">SslManagementType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PendingManagedCertificateId`<sup>Required</sup> <a name="PendingManagedCertificateId" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.pendingManagedCertificateId"></a>

```go
func PendingManagedCertificateId() *string
```

- *Type:* *string

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.certificateIdInput"></a>

```go
func CertificateIdInput() *string
```

- *Type:* *string

---

##### `SslManagementTypeInput`<sup>Optional</sup> <a name="SslManagementTypeInput" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.sslManagementTypeInput"></a>

```go
func SslManagementTypeInput() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `SslManagementType`<sup>Required</sup> <a name="SslManagementType" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.sslManagementType"></a>

```go
func SslManagementType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineDomainMappingSslSettings
```

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a>

---


### AppEngineDomainMappingTimeoutsOutputReference <a name="AppEngineDomainMappingTimeoutsOutputReference" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginedomainmapping"

appenginedomainmapping.NewAppEngineDomainMappingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineDomainMappingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



